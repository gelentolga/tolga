import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className=" py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="lg:grid lg:grid-cols-2 lg:gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="lg:col-span-1 text-justify flex flex-col p-10 justify-center"
            variants={containerVariants}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-10">About Me</h1>
            <p className="text-lg mb-4 text-gray-700">
              Hi, Im , a frontend developer with years of experience. I
              specialize in and have worked on projects for clients in
              industries such as .
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Some of my key skills include, and Im comfortable using tools such
              as.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              In my free time, I enjoy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
