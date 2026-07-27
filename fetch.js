const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

function writeProfileJson(payload) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./public/profile.json", JSON.stringify(payload), err => {
      if (err) return reject(err);
      console.log("saved file to public/profile.json");
      resolve();
    });
  });
}

function httpsGet(options) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let body = "";
      res.on("data", chunk => {
        body += chunk;
      });
      res.on("end", () => {
        resolve({statusCode: res.statusCode, body});
      });
    });
    req.on("error", reject);
    req.end();
  });
}

function httpsPost(options, payload) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let body = "";
      res.on("data", chunk => {
        body += chunk;
      });
      res.on("end", () => {
        resolve({statusCode: res.statusCode, body});
      });
    });
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function fetchGithubViaRest(username) {
  const headers = {
    "User-Agent": "jyothish-portfolio",
    Accept: "application/vnd.github+json"
  };

  const userResponse = await httpsGet({
    hostname: "api.github.com",
    path: `/users/${encodeURIComponent(username)}`,
    port: 443,
    method: "GET",
    headers
  });

  if (userResponse.statusCode !== 200) {
    throw new Error(ERR.requestFailed);
  }

  const user = JSON.parse(userResponse.body);
  const reposResponse = await httpsGet({
    hostname: "api.github.com",
    path: `/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`,
    port: 443,
    method: "GET",
    headers
  });

  const repos =
    reposResponse.statusCode === 200 ? JSON.parse(reposResponse.body) : [];

  const pinnedRepos = repos
    .filter(repo => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map(repo => ({
      node: {
        name: repo.name,
        description: repo.description,
        forkCount: repo.forks_count,
        stargazers: {totalCount: repo.stargazers_count},
        url: repo.html_url,
        id: String(repo.id),
        diskUsage: 0,
        primaryLanguage: repo.language
          ? {name: repo.language, color: null}
          : null
      }
    }));

  return {
    data: {
      user: {
        name: user.name || user.login,
        bio: user.bio,
        avatarUrl: user.avatar_url,
        location: user.location,
        pinnedItems: {
          totalCount: pinnedRepos.length,
          edges: pinnedRepos
        }
      }
    }
  };
}

async function fetchGithubViaGraphQL(username, token) {
  const query = JSON.stringify({
    query: `
{
  user(login:"${username}") {
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name
            description
            forkCount
            stargazers {
              totalCount
            }
            url
            id
            diskUsage
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
}
`
  });

  const headers = {
    Authorization: `Bearer ${token}`,
    "User-Agent": "jyothish-portfolio",
    "Content-Type": "application/json"
  };

  const response = await httpsPost(
    {
      hostname: "api.github.com",
      path: "/graphql",
      port: 443,
      method: "POST",
      headers
    },
    query
  );

  if (response.statusCode !== 200) {
    throw new Error(ERR.requestFailed);
  }

  const payload = JSON.parse(response.body);
  if (payload.errors || !payload.data?.user) {
    throw new Error(ERR.requestFailed);
  }

  return payload;
}

async function fetchGithubProfile(username) {
  if (GITHUB_TOKEN) {
    try {
      console.log(`Fetching GitHub profile via GraphQL for ${username}`);
      return await fetchGithubViaGraphQL(username, GITHUB_TOKEN);
    } catch (error) {
      console.warn(
        `GraphQL fetch failed (${error.message}). Falling back to public REST API.`
      );
    }
  }

  console.log(`Fetching GitHub profile via REST for ${username}`);
  return fetchGithubViaRest(username);
}

function fetchMediumBlogs(mediumUsername) {
  const encodedMediumUsername = encodeURIComponent(mediumUsername);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${encodedMediumUsername}`,
    port: 443,
    method: "GET"
  };

  return new Promise(resolve => {
    const req = https.request(options, res => {
      let mediumData = "";

      console.log(`statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        console.warn(
          `Warning: ${ERR.requestFailedMedium}. Continuing without Medium data.`
        );
        resolve();
        return;
      }

      res.on("data", d => {
        mediumData += d;
      });
      res.on("end", () => {
        fs.writeFile("./public/blogs.json", mediumData, function (err) {
          if (err) console.log(err);
          else console.log("saved file to public/blogs.json");
          resolve();
        });
      });
    });

    req.on("error", error => {
      console.warn(
        `Warning: Failed to fetch Medium data: ${error.message}. Continuing without Medium data.`
      );
      resolve();
    });

    req.end();
  });
}

async function main() {
  if (USE_GITHUB_DATA === "true") {
    if (!GITHUB_USERNAME) {
      throw new Error(ERR.noUserName);
    }

    const profile = await fetchGithubProfile(GITHUB_USERNAME);
    await writeProfileJson(profile);
  }

  if (MEDIUM_USERNAME) {
    await fetchMediumBlogs(MEDIUM_USERNAME);
  }
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
