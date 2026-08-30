// HOW TO ADD A NEW CERTIFICATION: copy an object, paste, fill in.
import tih from "./tih.png";
import sql from "./sql.png";
import canda from "./canda.png"

export const certifications = [
  // {
  //   id: "iitg-ai-excellence",
  //   title: "Certificate of Excellence",
  //   issuer: "IIT Guwahati",
  //   date: "TODO", // e.g. "March 2025"
  //   description: "TODO: one line on what this recognized",
  //   credentialUrl: "", // TODO: link to verify, if any
  //   image: "/images/certs/iitg-ai-excellence.png" // TODO
  // },
  {
    id: "research-internship",
    title: "Certificate of Completion — Research Internship",
    issuer: "IDEAS Technology Innovation Hub @ Indian Statistical Institute, Kolkata",
    date: "May'26-July'26",
    description: "Successfully completed a research internship focused on time-series forecasting, machine learning, and deep learning.",
    credentialUrl: "https://drive.google.com/file/d/1X4dJHJMMaXQSutHfxOwyWJtsg8waqzTn/view?usp=sharing",
    image: tih
  },
  {
    id: "sql-advanced",
    title: "Certificate of Accomplishment — SQL (Advanced)",
    issuer: "HackerRank",
    date: "Aug'26",
    description: "Successfully completed HackerRank's advanced SQL skill certification test.",
    credentialUrl: "https://drive.google.com/file/d/1SMtvBQb_OS0VG0o-VksT3R1YBPjUysHR/view?usp=sharing",
    image: sql
  },
  {
    id: "summer-projects-26",
    title: "Certificate of Completion — Summer Projects '26",
    issuer: "Consulting & Analytics Club, IIT Guwahati",
    date: "2026",
    description: "Successfully completed Summer Projects '26 on data-driven customer retention strategy.",
    credentialUrl: "https://drive.google.com/file/d/1fCvcACUapE0vJya-0rjg6iCTxY1_hQub/view?usp=sharing",
    image: canda
  }
  ,

  // ---- TEMPLATE ----
  // {
  //   id: "unique-id",
  //   title: "Certificate Title",
  //   issuer: "Issuing Organization",
  //   date: "Month Year",
  //   description: "One line description.",
  //   credentialUrl: "",
  //   image: "/images/certs/your-image.png"
  // },
]