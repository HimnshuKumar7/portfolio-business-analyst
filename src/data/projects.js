// HOW TO ADD A NEW PROJECT:
// Copy an object below (or the TEMPLATE at the bottom), paste it into the
// `projects` array, and fill in the fields. The whole card is clickable
// (opens liveUrl / deckUrl) and also shows explicit "View Project"/"GitHub"
// buttons that don't trigger the card click.
//
// type: "project"  -> shows "View Project" + "GitHub" buttons, needs liveUrl + githubUrl
// type: "deck"     -> shows "View Deck" button only, needs deckUrl

import askBot from "./ask-bot.png";
import cpuSimulator from "./cpu-simulator.png";
import krishiKonnec from "./krishi-konnec.png";
import repoAisweI from "./repo-aiswe.png";
import bank_churn from "./bank_churn.png";
import prod_pers from "./prod_pers.png";
import repoAiInterview from "./interview.png";
import timeseries_automl from "./timeseries_automl.png";

export const allTags = [
  "Machine Learning", "Deep Learning", "FastAPI", "LangGraph", "RAG", "SQL",
  "Data Analysis", "Deployment", "React", "Authorisation", "API",
  "Embeddings", "PowerBI", "Operating System", "Algorithms"
]

export const projects = [
  // ---- Featured (Business Analyst) projects, shown first ----
  {
    id: "startup-sprint",
    title: "Krishi Konnect — Startup Sprint",
    description: "Led user research and Figma prototyping for a dual-interface mobile platform connecting organic farmers with consumers, addressing traceability, certification trust, and digital accessibility through localized UX. Developed a business model targeting 30,000+ farmers and 25,000+ consumers by Month 18 with subscription, bulk-order, and delivery revenue streams.",
    tags: ["Product Design", "Figma", "User Research", "Business Strategy", "UX/UI", "Market Research"],
    type: "deck",
    deckUrl: "", // TODO
    image: krishiKonnec
  },
  {
    id: "product-perspective",
    title: "Product Perspective",
    description: "Designed a digital lending solution for INDmoney by conducting market and competitor research, identifying user pain points, and defining key lending opportunities. Developed user personas, customer journeys, MVP features, and wireframes for instant loans, credit lines, and BNPL. Prioritized features using RICE scoring and defined product metrics and a phased go-to-market strategy.",
    tags: ["Data Analysis"],
    type: "deck",
    deckUrl: "", // TODO: paste your deck link (e.g. Google Slides/Figma)
    image: prod_pers
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description: "Built an end-to-end customer churn prediction system using XGBoost, LightGBM, and CatBoost, achieving 0.891 ROC-AUC through targeted feature engineering and a Joblib-serialized preprocessing pipeline, with React and FastAPI for real-time risk prediction.",
    tags: ["Machine Learning", "XGBoost", "LightGBM", "CatBoost", "FastAPI", "React", "Docker"],
    type: "project",
    liveUrl: "https://bank-customer-churn-predictor.vercel.app",
    githubUrl: "https://github.com/HimnshuKumar7/Bank-Customer-Churn-Predictor",
    image: bank_churn
  },

  // ---- Remaining projects ----
  {
    id: "time-series-automl-studio",
    title: "Time-Series AutoML Studio",
    description: "Built a browser-based time-series AutoML studio using Pyodide and TensorFlow.js, supporting ARIMA, VARMAX, HistGradientBoosting, LSTM, and Transformer forecasting with Web Workers, IndexedDB, and FastAPI-JWT authentication.",
    tags: ["Time-Series", "AutoML", "TensorFlow.js", "Pyodide", "FastAPI", "React", "PostgreSQL"],
    type: "project",
    liveUrl: "https://timeseries-automl-studio.vercel.app",
    githubUrl: "https://github.com/HimnshuKumar7/timeseries-automl-studio",
    image: timeseries_automl
  },
  {
    id: "ai-software-engineer",
    title: "AI Software Engineer",
    description: "Built a full-stack AI code assistant with FastAPI, React, PostgreSQL, and LangGraph, featuring JWT authentication and a code-aware RAG pipeline using Tree-sitter and FAISS for context-aware code Q&A.",
    tags: ["Machine Learning", "Deep Learning", "FastAPI", "LangGraph", "RAG"],
    type: "project",
    liveUrl: "https://ai-software-engineer-omega.vercel.app/",
    githubUrl: "https://github.com/HimnshuKumar7/AISoftwareEngineer",
    image: repoAisweI
  },
  {
    id: "ai-interview-platform",
    title: "AI Coding Interview Platform",
    description: "Built a full-stack AI coding interview platform with FastAPI, React, PostgreSQL, and Socket.IO, featuring Monaco Editor, server-authoritative WebSocket timers, Groq LLM integration, and a real-time leaderboard.",
    tags: ["FastAPI", "React", "PostgreSQL", "Socket.IO", "Groq", "LLM", "WebSockets"],
    type: "project",
    liveUrl: "https://ai-interview-frontend-sigma.vercel.app/",
    githubUrl: "https://github.com/HimnshuKumar7/ai-interview-platform",
    image: repoAiInterview
  },
  {
    id: "askbot",
    title: "AskBot",
    description: "Built an AI-powered content studio that generates structured, long-form blogs from customizable prompts using Groq LLaMA and LangGraph, with one-click HTML export for website publishing.",
    tags: ["RAG", "LangGraph", "Embeddings", "FastAPI"],
    type: "project",
    liveUrl: "https://ask-bot-tau.vercel.app/",
    githubUrl: "https://github.com/HimnshuKumar7/AskBot",
    image: askBot
  },
  {
    id: "cpu-scheduler-algorithm",
    title: "CPU Scheduler Simulator",
    description: "Built an interactive CPU scheduling simulator using React and FastAPI, implementing FCFS, SJF, and Round Robin with configurable time quantum, interactive Gantt charts, and comparative scheduling metrics including waiting, turnaround, completion, and response times.",
    tags: ["Operating Systems", "CPU Scheduling", "Algorithms", "React.js", "FastAPI"],
    type: "project",
    liveUrl: "https://cpu-scheduler-simulator-five.vercel.app/",
    githubUrl: "https://github.com/HimnshuKumar7/CPU-scheduler-simulator",
    image: cpuSimulator
  },

  // ---- TEMPLATE: copy this to add a new project ----
  // {
  //   id: "unique-id-no-spaces",
  //   title: "Project Title",
  //   description: "One or two sentences on what it does and the impact.",
  //   tags: ["Tag1", "Tag2"],
  //   type: "project", // or "deck"
  //   liveUrl: "https://...",
  //   githubUrl: "https://github.com/...",
  //   // deckUrl: "https://..." // use instead of liveUrl/githubUrl if type is "deck"
  //   image: "/images/projects/your-image.png"
  // },
]