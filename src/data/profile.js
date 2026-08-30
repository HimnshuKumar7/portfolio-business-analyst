// Edit this file to update your Home page content.
export const profile = {
  name: "Himanshu Kumar",
  roles: ["Aspiring Business Analyst", "AI/ML Enthusiast"],

  // Drop your photo in public/me.jpeg (or change this path)
  heroImage: "/me.jpeg",

  about: `I'm an aspiring Business Analyst who bridges business problems and data-driven solutions.
            At IIT Guwahati, I work across requirements gathering, market research, user journey mapping, and feature prioritization.
            I combine business thinking with hands-on skills in SQL, Power BI, and Python-based machine learning.
            My work includes churn prediction achieving 0.891 ROC-AUC.
            I also develop product strategy and go-to-market plans for digital lending and farmer-to-consumer marketplaces.
            I turn business questions and data insights into clear, actionable decisions.`,
  // ^ TODO: personalize this paragraph

  // Drop your resume PDF in the public/ folder
  resumeUrl: "https://drive.google.com/file/d/1XjP3so8iEdHedLHTKhjF2n42VXxgGRi6/view?usp=sharing",

  education: [
    {
      degree: "Bachelor of Technology",
      institute: "Indian Institute of Technology, Guwahati",
      duration: "2023-2027",
      score: "8.31/10.00"
      // details: "TODO: relevant coursework, honors, or thesis"
    },
    // Add another object here for a second entry (e.g. Class XII)
  ],

  // Each key becomes a skill category card. Add/remove keys freely.
  skills: {
    "Business Analysis": ["Requirements Gathering", "Stakeholder Management", "Market & Competitor Research", "User Personas & Journeys", "RICE Prioritization", "Go-To-Market Strategy"],
    "Data & Visualization": ["SQL", "Power BI", "Data Analysis", "Excel", "Customer Segmentation"],
    "Languages": ["Python", "SQL", "JavaScript", "C++"],
    "Machine Learning & AI": ["Machine Learning", "Deep Learning", "LangGraph", "RAG", "Embeddings"],
    "Backend & APIs": ["FastAPI", "React", "Authorisation", "API"],
    "Deployment & Tools": ["Deployment", "Git", "Docker"] // TODO: adjust as needed
  },

  contact: {
    email: "himanshukumar80991@gmail.com",
    phone: "+91 8292912831",
    location: "Guwahati , Assam",
  },

  social: {
    github: "https://github.com/HimnshuKumar7",
    linkedin: "https://www.linkedin.com/in/himanshu-kumar-4398212a5/",
    leetcode: "https://leetcode.com/u/himan__gg/",
    twitter: "" // leave blank to hide
  }
}
