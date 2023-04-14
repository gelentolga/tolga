"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <div className="w-full x` h-[500px] bg-[url('/WESTERN.jpg')] bg-fixed bg-no-repeat bg-cover ">
    {/* <div className="bg-gray-100 bg-opacity-80 rounded-lg p-4 shadow-2xl text-justify h-full">
      <h1 className="font-black tracking-tighter text-[20px] text-[#5332fd]">
        Hi, I'm [your name], a frontend developer with [number] years of
        experience.I specialize in [front-end framework(s)/language(s)] and have
        worked on projects for clients in industries such as [list
        industries].Some of my key skills include [list skills], and I'm
        comfortable using tools such as [list design tools]. In my free time, I
        enjoy [list hobbies/interests/passions].
      </h1>
    </div> */}
  </div>
);

export default About;
