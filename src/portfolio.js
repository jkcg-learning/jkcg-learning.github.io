/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/hello.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "JKCG",
  title: "Hey, I'm Jyothish",
  subTitle: [
    emoji(
      "Applied AI Engineer building production LLM systems, autonomous agents, and RAG pipelines with LangChain, LangGraph, and Azure."
    ),
    emoji(
      "Experienced in Computer Vision, NLP, and the full MLOps / LLMOps lifecycle — from prototyping to reliable cloud deployment."
    )
  ],
  resumeLink:
    "https://drive.google.com/file/d/1vW35RRWiYgWbm3PL4tMNWm4uQMyQFCTL/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jkcg-learning",
  linkedin: "https://www.linkedin.com/in/jyothishchandrasenan/",
  medium: "https://medium.com/@jyothish-tech",
  calendly: "https://calendly.com/jkcg/30min",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I design and ship AI systems that work in production — agentic workflows, RAG applications, and ML platforms on Azure.",
  skills: [
    emoji("⚡ Build autonomous AI agents with LangChain, LangGraph, MCP, and tool calling"),
    emoji("⚡ Design RAG pipelines for search, retrieval, and enterprise knowledge systems"),
    emoji("⚡ Develop Computer Vision and NLP solutions with PyTorch and Hugging Face"),
    emoji("⚡ Run MLOps / LLMOps on Azure — experiment tracking, evaluation, and deployment"),
    emoji("⚡ Deliver production APIs with FastAPI, Docker, MLflow, and GitHub Actions")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "PyTorch",
      customClassname: "custom-icon-pytorch"
    },
    {
      skillName: "TensorFlow",
      customClassname: "custom-icon-tensorflow"
    },
    {
      skillName: "HuggingFace",
      customClassname: "custom-icon-huggingface"
    },
    {
      skillName: "LangChain",
      customClassname: "custom-icon-langchain"
    },
    {
      skillName: "LangGraph",
      customClassname: "custom-icon-langgraph"
    },
    {
      skillName: "Azure",
      customClassname: "custom-icon-azure"
    },
    {
      skillName: "Microsoft Foundry",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "MCP",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "RAG",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "AI Agents",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "OpenCV",
      customClassname: "custom-icon-opencv"
    },
    {
      skillName: "FastAPI",
      customClassname: "custom-icon-fastapi"
    },
    {
      skillName: "MLFlow",
      customClassname: "custom-icon-mlflow"
    },
    {
      skillName: "DVC",
      customClassname: "custom-icon-dvc"
    },
    {
      skillName: "OpenAI",
      customClassname: "custom-icon-openai"
    },
    {
      skillName: "GitHub Actions",
      customClassname: "custom-icon-githubactions"
    },
    {
      skillName: "ONNX",
      customClassname: "custom-icon-onnx"
    },
    {
      skillName: "Triton",
      customClassname: "custom-icon-triton"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EPITA - Paris, France",
      logo: require("./assets/images/Epita.png"),
      subHeader: "Master in Data Science",
      duration: "2019 - 2021"
    },
    {
      schoolName: "Mahatma Gandhi University - Kerala, India",
      logo: require("./assets/images/MGUniversity.png"),
      subHeader:
        "Bachelor of Technology in Electrical and Electronics Engineering",
      duration: "2009 - 2013"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "LLM & Agents",
      progressPercentage: "80%"
    },
    {
      Stack: "MLOps / LLMOps",
      progressPercentage: "85%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "80%"
    },
    {
      Stack: "NLP",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer",
      company: "Diapason",
      companylogo: require("./assets/images/diapasonLogo.png"),
      date: "09/2024 – Present",
      desc: "Paris, France"
    },
    {
      role: "Deep Learning Engineer",
      company: "Ryte AI",
      companylogo: require("./assets/images/ryteLogo.png"),
      date: "09/2023 – 08/2024",
      desc: "Paris, France"
    },
    {
      role: "Deep Learning Engineer",
      company: "Automi AI",
      companylogo: require("./assets/images/automiLogo.png"),
      date: "09/2022 – 08/2023",
      desc: "Paris, France"
    },
    {
      role: "Research Engineer",
      company: "MinesParisTech",
      companylogo: require("./assets/images/minesLogo.png"),
      date: "03/2022 – 08/2022",
      desc: "Paris, France"
    },
    {
      role: "Computer Vision - Intern",
      company: "TomTom",
      companylogo: require("./assets/images/tomtomLogo.png"),
      date: "05/2021 – 10/2021",
      desc: "Paris, France"
    },
    {
      role: "Analyst",
      company: "Verizon",
      companylogo: require("./assets/images/verizonLogo.png"),
      date: "06/2016 – 01/2019",
      desc: "Chennai, India"
    },
    {
      role: "Systems Engineer",
      company: "TCS",
      companylogo: require("./assets/images/tcsLogo.png"),
      date: "01/2014 – 05/2016",
      desc: "Chennai, India"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require(""),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Langchain",
      subtitle: "Understanding of LLMs & RAG",
      image: require("./assets/images/LangchainLogo.png"),
      imageAlt: "Langchain",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.activeloop.ai/certificates/lurh0vg5km"
        }
      ]
    },

    {
      title: "Azure",
      subtitle: "Azure Fundamentals",
      image: require("./assets/images/AzureLogo.png"),
      imageAlt: "Azure",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/285eca7d-6a67-4a59-ae6d-156f767af169/public_url"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Talk 1",
      subtitle: "Cqsd",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Book a call or reach out on LinkedIn."
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
