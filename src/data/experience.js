// HOW TO ADD A NEW EXPERIENCE:
// Just copy the object below, paste it into the array, and fill it in.
// The Experience page automatically renders one card per object, newest first.

export const experiences = [
  {
    id: "exp-1",
    role: "Summer Research Intern",
    company: "IDEAS Technology Innovation Hub @ Indian Statistical Institute,Kolkata",
    location: "Remote",
    duration: "May'26-July'26",
    points: [
      "Built a full-stack time-series forecasting web application that supports CSV uploads and forecast generation.",
      "Developed and integrated multiple classical machine learning and deep learning models, including ARIMA, VARMAX, Linear Regression, Random Forest, LSTM, GRU, Bi-LSTM, and Transformer.",
      "Implemented multivariate deep forecasting with selectable exogenous features and VAR-based future feature generation.",
      "Developed interactive EDA, time-based model evaluation using RMSE/MAE, and recursive multi-step forecasting."],
    techStack: ["Python", "FastAPI", "React"]
  },

  // Add your next experience here, e.g.:
  // {
  //   id: "exp-2",
  //   role: "...",
  //   company: "...",
  //   location: "...",
  //   duration: "...",
  //   points: ["...", "..."],
  //   techStack: ["...", "..."]
  // },
]