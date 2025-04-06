type ProjectModel = {
  year: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  stack: string[];
  display: boolean;
};

const projects: ProjectModel[] = [
  {
    year: 2024,
    title: "IoT sensor",
    description:
      "An advanced AI-powered platform designed to streamline contract review by analyzing individual clauses, assessing risk levels, and providing actionable improvement suggestions.",
    image: "./images/iot.png",
    github: "https://github.com/jiatangzhi/iot_embedded_system",
    stack: ["Python", "Flask"],
    display: true,
  },
  {
    year: 2024,
    title: "Stock Market Predictor",
    description: `A platform to predict stock returns using ARIMA and LightGBM to analyze historical data and uncover key drivers with feature importance in this financial forecasting project.`,
    image: "./images/r_stock.webp",
    link: "https://jiatangzhi.github.io/r_stock_market_prediction/",
    github: "https://github.com/jiatangzhi/r_stock_market_prediction",
    stack: ["R", "LightGBM", "Jupyter", "ARIMA"],
    display: true,
  },
  {
    year: 2023,
    title: "Dictionary",
    description:
      "Application to search for English vocabulary, with pronunciations, meanings, synonyms, examples, and image galleries.",
    image: "./images/dictionary.webp",
    link: "https://react-dictionary-jiatz.netlify.app/",
    github: "https://github.com/jiatangzhi/react-dictionary",
    stack: ["React", "AJAX", "JavaScript", "HTML", "CSS"],
    display: true,
  },
  {
    year: 2023,
    title: "Weather App",
    description:
      "Application to search for English vocabulary, with pronunciations, meanings, synonyms, examples, and image galleries.",
    image: "./images/weather.png",
    link: "https://react-weather-app-jiatz.netlify.app/",
    github: "https://github.com/jiatangzhi/react-weather-app",
    stack: ["React", "AJAX", "JavaScript", "HTML", "CSS"],
    display: false,
  },
  {
    year: 2023,
    title: "GloBex",
    description:
      "University wide app used by over 20,000 students. Built with Flutter frontend - consuming a Node.js backend microservices architecture. Has features such as timetable, maps, events, news, and more.",
    image: "./images/globex.png",
    link: "https://travel-agency-jiatz.netlify.app/",
    stack: ["HTML", "JavaScript", "CSS"],
    display: true,
  },
  {
    year: 2022,
    title: "Stock Screener Research",
    description:
      "Research project to investigate evaluates methods against S&P 500 US stock data from Yahoo Finance, aiming to offer a concise financial market snapshot.",
    image: "./images/hoi.webp",
    link: "https://github.com/jiatangzhi/stock_screener/blob/main/Dissertation.pdf",
    github: "https://github.com/jiatangzhi/stock_screener",
    stack: ["Python", "K-Means", "T-sne", "Numpy", "Unsupervised Learning"],
    display: false,
  },
  {
    year: 2021,
    title: "Game of Life in Haskell",
    description:
      "Implementation of Conway's Game of Life in Haskell using an imperative approach. UI is created by printing to the terminal. Uses the HSpec testing framework.",
    image: "./images/gol.png",
    github: "https://github.com/jiatangzhi/game-of-life",
    stack: ["Haskell"],
    display: false,
  },
];

export { projects };
export type { ProjectModel };
