import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { socials } from "../constants";
import Image from "next/image";

const Contact = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-center p-20 mt-40"
  >
    <Head>
      <title>Contact | Graphic Designer</title>
    </Head>
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="text-4xl font-extrabold text-indigo-600"
    >
      Let's Connect
    </motion.h1>
    <motion.p
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="py-4 text-gray-700"
    >
      If you're interested in working together or just want to say hello, feel
      free to reach out to me via the following channels:
    </motion.p>
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="py-4"
    >
      <motion.h2
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 25, opacity: 0 }}
        className="text-2xl font-bold text-indigo-600"
      >
        Get in Touch
      </motion.h2>
      <ul className="flex flex-col text-gray-700">
        <li className="py-2">
          <motion.div className="flex items-center" whileHover={{ scale: 1.1 }}>
            <motion.i className="fas fa-envelope fa-2x mr-4 text-indigo-600" />
            <a className="underline" href="mailto:graphicdesigner@example.com">
              graphicdesigner@example.com
            </a>
          </motion.div>
        </li>
        <li className="py-2">
          <motion.div className="flex items-center" whileHover={{ scale: 1.1 }}>
            <motion.i className="fab fa-linkedin fa-2x mr-4 text-indigo-600" />
            <a
              className="underline"
              href="https://www.linkedin.com/in/graphicdesigner"
            >
              graphicdesigner
            </a>
          </motion.div>
        </li>
        <li className="py-2">
          <motion.div className="flex items-center" whileHover={{ scale: 1.1 }}>
            <motion.i className="fab fa-twitter fa-2x mr-4 text-indigo-600" />
            <a className="underline" href="https://twitter.com/graphicdesigner">
              @graphicdesigner
            </a>
          </motion.div>
        </li>
      </ul>
      <div className="bg-black">
        <div className="flex justify-center items-center">
          <motion.div className="gap-5" whileHover={{ scale: 1.1 }}>
            {socials.map((social) => (
              <Image
                width={24}
                height={24}
                key={social.name}
                src={social.url}
                alt={social.name}
                className="object-contain cursor-pointer my-5"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default Contact;
