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
      "A passionate AI Engineer 🤖 with expertise in developing innovative solutions using Python, PyTorch & Tensorflow, along with a deep understanding of libraries and frameworks."
    ),
    emoji(
      "Skilled in handling Computer Vision 📷, NLP 📝, LLM 🧠 projects, proficient in MLOps 🔧 and cloud technologies ☁️."
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
    "Crazy AI Engineer who enjoys exploring tech stacks related to AI and driving the latest innovations",
  skills: [
    emoji("⚡ Analyze complex data & derive insights"),
    emoji("⚡ Clean & transform data"),
    emoji("⚡ Train, fine-tune, & optimize AI models"),
    emoji("⚡ Deploy AI models to cloud & edge"),
    emoji("⚡ Integrate AI into existing applications & services"),
    emoji(
      "⚡ Leverage the groundbreaking models and architectures developed by AI researchers and innovators"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "PyTorch",
      customClassname: "custom-icon-pytorch" // Custom icon
    },
    {
      skillName: "TensorFlow",
      customClassname: "custom-icon-tensorflow" // Custom icon
    },
    {
      skillName: "Keras",
      customClassname: "custom-icon-keras" // Custom icon
    },
    {
      skillName: "Scikit-Learn",
      customClassname: "custom-icon-scikit-learn" // Custom icon
    },
    {
      skillName: "HuggingFace",
      customClassname: "custom-icon-huggingface" // Custom icon
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
      skillName: "FastAPI",
      customClassname: "custom-icon-fastapi" // Custom icon
    },
    {
      skillName: "Streamlit",
      customClassname: "custom-icon-streamlit" // Custom icon
    },
    {
      skillName: "Kubeflow",
      customClassname: "custom-icon-kubeflow" // Custom icon
    },
    {
      skillName: "GCP",
      customClassname: "custom-icon-gcp" // Custom icon
    },
    {
      skillName: "OpenCV",
      customClassname: "custom-icon-opencv" // Custom icon
    },
    {
      skillName: "NumPy",
      customClassname: "custom-icon-numpy" // Custom icon
    },
    {
      skillName: "Pandas",
      customClassname: "custom-icon-pandas" // Custom icon
    },
    {
      skillName: "Matplotlib",
      customClassname: "custom-icon-matplotlib" // Custom icon
    },
    {
      skillName: "MLFlow",
      customClassname: "custom-icon-mlflow" // Custom icon
    },
    {
      skillName: "DVC",
      customClassname: "custom-icon-dvc" // Custom icon
    },
    {
      skillName: "OpenAI",
      customClassname: "custom-icon-openai" // Custom icon
    },
    {
      skillName: "GitHub Actions",
      customClassname: "custom-icon-githubactions" // Custom icon
    },
    {
      skillName: "ONNX",
      customClassname: "custom-icon-onnx" // Custom icon
    },
    {
      skillName: "Triton",
      customClassname: "custom-icon-triton" // Custom icon
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
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
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "80%"
    },
    {
      Stack: "NLP / LLM / Agents",
      progressPercentage: "75%"
    },
    {
      Stack: "MLOps",
      progressPercentage: "80%"
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
  showGithubProfile: "true",
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
