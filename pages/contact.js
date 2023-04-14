import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
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

  const formVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Contact Me
            </h1>
            <p className="text-lg mb-4 text-gray-700">
              Have a question or want to work together? Send me a message using
              the form below, or reach out to me via email at [your email
              address].
            </p>
          </div>
          <motion.div className="lg:col-span-1" variants={formVariants}>
            <form className="flex flex-col">
              <label className="text-lg font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-400 py-2 px-3 mb-4 rounded-lg"
                type="text"
                id="name"
                name="name"
                required
              />
              <label className="text-lg font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-400 py-2 px-3 mb-4 rounded-lg"
                type="email"
                id="email"
                name="email"
                required
              />
              <label className="text-lg font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="border border-gray-400 py-2 px-3 mb-4 rounded-lg"
                id="message"
                name="message"
                required
              ></textarea>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
