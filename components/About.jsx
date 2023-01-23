"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section
    className={`relative z-10 mb-10 h-[600px] bg-gray-800 flex justify-center items-center`}
  >
    <div className="bg-[url('/back.png')] bg-cover w-full h-[200px] max-md:h-[150px] absolute -bottom-20 max-md:-bottom-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex-col pl-50 max-md:ml-0`}
    >
      <TypingText
        title={`| Finding beautyin the unexpected`}
        textStyles="text-[50px]"
        className=""
      />

      {/* <motion.p
        variants={fadeIn("up", "tween", 0, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{" "}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{" "}
        of today, using only{" "}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{" "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p> */}
      {/* <div className={`${styles.flexStart}`}>
        <motion.img
          variants={fadeIn("up", "tween", 0.5, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className={`w-[36px] h-[56px] object-contain mt-[40px] ml-28 max-md:ml-0`}
        />
      </div> */}
    </motion.div>
  </section>
);

export default About;
