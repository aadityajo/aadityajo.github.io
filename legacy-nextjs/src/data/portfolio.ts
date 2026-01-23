export const portfolioData = {
  name: "Aaditya Joshi",
  role: "Lead Software Engineer",
  education: [
    {
      institution: "Georgia Institute of Technology",
      degree: "M.S. Computer Science (GPA: 4.0)",
      duration: "Aug 2025 - Dec 2026",
    },
    {
      institution: "Indian Institute of Information Technology, Pune",
      degree: "B.Tech, Computer Science & Eng.",
      duration: "Jun 2021",
    },
  ],
  experience: [
    {
      company: "Ridecell",
      role: "Lead Engineer",
      duration: "Jul 2021 - Jul 2025",
      points: [
        "Engineered 'Insight Builder' using Claude and PydanticAI to automate SQL/chart generation, reducing dashboard creation time by 60%.",
        "Led global on-site platform launches (Germany, Spain, Belgium) as primary technical lead.",
        "Reduced API latency by 75% via Django ORM optimization and materialized views.",
        "Maintained 99.999% uptime and resolved SEV1/SEV2 incidents in <1 hour.",
      ],
    },
    {
      company: "Control Tech Systems",
      role: "R&D Intern",
      duration: "Jan 2021 - Mar 2021",
      points: [
        "Developed Arduino-based electric roll press proof-of-concept using C/C++.",
        "Designed and built new PLC-controlled machines for the laundry industry.",
      ],
    },
    {
      company: "Finiq Consulting India Pvt Ltd",
      role: "SDE Intern",
      duration: "Apr 2020 - Jun 2020",
      points: [
        "Built a trader-focused landing page with JavaScript and Chart.js for real-time updates.",
        "Designed REST APIs with Spring Boot, JPA, and MySQL, adding multithreaded schedulers.",
      ],
    },
  ],
  projects: [
    {
      title: "Someity",
      role: "Making the Web Accessible for All",
      description: "Winner MLH Hack-cessible hackathon. A Chrome-based extension to make websites more a11y-friendly without changing source code. Served 140+ users from 28 countries.",
      tags: ["JavaScript", "Accessibility", "Chrome Extension"],
      link: "https://someity.tech/",
      image: "/someity.png",
    },
    {
      title: "Weblate Contributor",
      role: "Open Source - Python, Django",
      description: "Contributed to core codebase (6k+ stars) by implementing API endpoints for translation units and streamlining onboarding documentation.",
      tags: ["Python", "Django", "Open Source"],
      link: "https://github.com/WeblateOrg/weblate",
      image: "/weblate.png",
    },
  ],
  skills: {
    languages: ["Python", "C/C++", "JavaScript", "Java", "SQL"],
    backend: ["Django", "DRF", "FastAPI", "Spring Boot", "Node.js"],
    cloud: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Kafka"],
    ai: ["PydanticAI", "Anthropic Claude", "RAG", "LangChain", "PyTorch"],
  },
  contact: {
    email: "aaditya.joshi@gatech.edu",
    linkedin: "https://linkedin.com/in/aadityajoshi2699/",
    github: "https://github.com/aadityajo",
  },
};
