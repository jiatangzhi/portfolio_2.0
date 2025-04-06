type ExperienceModel = {
  display: boolean;
  role: string;
  company: string;
  link: string;
  dates: string;
  description: string;
  descriptions: string[];
  technologies: string[];
  projects?: {
    title: string;
    link: string;
  }[];
};

const experience: ExperienceModel[] = [
  {
    display: true,
    role: "Cloud Data Engineer",
    company: "IKERLAN",
    link: "https://www.ikerlan.es/en",
    dates: "Sep 2024 - Feb 2025",
    description:
      "Designed a transactional Data Lakehouse and ETL pipelines for telemetry data on a cloud-native AWS architecture. Optimized big data processing with Apache Spark and developed Grafana dashboards for real-time monitoring.",
    descriptions: [],
    technologies: [
      "S3",
      "Apache Iceberg",
      "Apache Spark",
      "Python",
      "AWS Services",
      "Glue",
      "Athena",
      "Docker",
      "Gitlab",
      "IoT Core",
      "MQTT",
      "IAM",
      "AWS IaC",
      "Parquet",
      "Batch Processing",
      "ETL",
      "Grafana",
    ],
    projects: [],
  },
  {
    display: true,
    role: "Machine Learning Engineer",
    company: "BTS",
    link: "https://bts.com/",
    dates: "Apr 2024 - Jun 2024",
    description:
      "Built an AI-driven knowledge retrieval system, transforming internal documents into a structured, searchable format for consulting teams. Designed an ETL workflow to clean and normalize case data, automating document processing to streamline research and decision-making.",
    descriptions: [],
    technologies: [
      "Python",
      "ETL",
      "Pinecone",
      "Flowise",
      "NLP",
      "GitHub",
      "LLMs",
    ],
    projects: [],
  },
  {
    display: true,
    role: "Data Scientist",
    company: "CertiDeal",
    link: "https://certideal.com/",
    dates: "Oct 2023 - Dec 2023",
    description:
      "Applied machine learning-driven price sensitivity analysis to optimize pricing strategies for refurbished smartphones, enhancing revenue predictability to mitigate market cannibalization, balancing pricing across product categories to prevent revenue loss.",
    descriptions: [],
    technologies: [
      "Price Elasticity",
      "Feature Engineering",
      "Market Segmentation",
    ],
    projects: [],
  },
  {
    display: true,
    role: "Software Engineer",
    company: "NightBloom AI",
    link: "https://www.exeter.ac.uk/",
    dates: "Jun 2023 - Aug 2023",
    description:
      "Worked on a variety of applications, building a REST API to support a new UI. Queried and managed SQL and NoSQL databases to create and optimize backend tables.",
    descriptions: [],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Flutter",
      "Framer Motion",
    ],
    projects: [],
  },
  {
    display: false,
    role: "Data Engineer",
    company: "Nocxa",
    link: "https://nocxa.com/",
    dates: "Jun 2022 - Aug 2022",
    description:
      "Developed scripts to scrape data, integrate third-party apps, and connect them to the data warehouse. Set up Google Business profiles for clients and optimized UI through A/B testing, boosting sales by 35%.",
    descriptions: [],
    technologies: ["Python", "Web Scraping", "Snowflake", "Google Optimize"],
    projects: [],
  },
];

export { experience };
export type { ExperienceModel };
