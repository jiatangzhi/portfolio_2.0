"use client";

import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.section
      id="about"
      className="container flex flex-col min-h-fit"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-xl font-semibold text-[var(--lightest-slate)] md:hidden my-2 md:my-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        About Me
      </motion.h1>
      <motion.p variants={containerVariants} initial="hidden" animate="visible">
        I’m a developer passionate about building scalable, data-driven
        solutions, based in{" "}
        <a
          href="https://www.google.com/maps/place/Spain"
          target="_blank"
          className="text-[var(--green-bright)] hover:text-[var(--lightest-slate)"
        >
          Spain
        </a>
        .
        <br />
        <br />
        My journey began in web development, playing around with React and
        front-end technologies, but my curiosity pulled me deeper into the world
        of Big Data and Machine Learning.
        <br />
        <br />
        Currently focused on designing data pipelines, building AI-powered
        systems, and architecting lakehouse solutions to make sense of massive
        amounts of data. I love solving scalability challenges, optimizing
        performance, and fine-tuning cloud-native architectures for speed and
        reliability.
        <br />
        <br />
        When I&#39;m not wrangling data, I&#39;m usually lifting at the gym,
        buried in a book, exploring new places, or on the hunt for my next
        favorite meal.
      </motion.p>
    </motion.section>
  );
}

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring", // adds a bouncing effect
      stiffness: 100, // controls the stiffness of the spring, increase for more energy
      damping: 10, // controls the friction, increase for less bounce
      duration: 2,
      delay: 0,
    },
  },
};
