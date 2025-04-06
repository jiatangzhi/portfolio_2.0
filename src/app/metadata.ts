import { Metadata } from "next";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

export const mainMetadata: Metadata = {
  title: "Jia Tang Zhi - Software Engineer based in Spain",
  description: "Portfolio of Jia Tang Zhi - Software Engineer based in Spain",
  applicationName: "Jia's Portfolio",
  keywords: [
    "Jia Tang Zhi",
    "Software Engineer",
    "Frontend Developer",
    "Web Development Portfolio",
    "React Developer",
    "Jia Portfolio",
    "jiatangzhi",
    "Tang Zhi",
    "Jia",
  ],
  creator: "Jia Tang Zhi",
  publisher: "Jia Tang Zhi",
  alternates: {
    canonical: "https://jxtangzhi.com",
  },
  openGraph: {
    title: "Jia Tang Zhi - Data Engineer Portfolio",
    description: "Portfolio of Jia Tang Zhi - Data Engineer based in Spain",
    url: "https://jxtangzhi.com",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Jia Logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/logo/logo.svg", type: "image/svg+xml" },
      { url: "/logo/logo.png", sizes: "180x180" },
    ],
    apple: "/logo/logo.png",
  },
  themeColor: "#0a192f",
  viewport: "width=device-width, initial-scale=1",
  category: "portfolio",
  robots: "index, follow",
  metadataBase: new URL("http://jxtangzhi.com"),
};