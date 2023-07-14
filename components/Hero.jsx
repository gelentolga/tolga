"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <div className="w-full x` h-[500px] bg-bg-colorfull bg-no-repeat bg-cover ">
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
    <div className="w-full h-full absolute  max-md:-bottom-0 bg-black bg-opacity-20" />
    <section
      className={`relative z-10 mb-0 h-[520px] max-md:h-[360px] justify-center items-start grid grid-cols-1 max-md:grid-cols-1`}
    >
      <div className="w-full h-full absolute max-md:-bottom-0" />
      {/* <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-gray-100 bg-opacity-0 rounded-lg p-4 shadow-2xl pt-0 max-md:ml-0 `}
    >
      <div className="m-10 text-center max-md:text-center max-md:m-0 max-md:mt-10">
        <h1 className="font-black text-[80px] max-lg:text-[50px] max-xl:text-[70px] max-md:text-[45px]  text-[#5332fd] drop-shadow-sm font-Poppins">
          Creativity *
        </h1>
        <h1 className="font-black text-[80px] max-lg:text-[50px] max-md:text-[40px] max-xl:text-[70px] drop-shadow-lg font-Poppins">
          is intelligence
        </h1>
        <h4 className="font-bold text-[60px] max-lg:text-[35px] max-md:text-[30px] max-xl:text-[50px] text-white drop-shadow-lg font-Poppins">
          having fun.
        </h4>
        <h4 className="text-[15px] mt-4"> - Albert Einstein</h4>
      </div>
    </motion.div> */}
      {/* <motion.div
      className={`relative h-[500px] max-lg:h-[400px] max-md:h-[200px] `}
    >
      <Image
        src="/logo1.png"
        height={960}
        width={500}
        className="h-full w-full object-contain "
      />
    </motion.div> */}
      <motion.div
        whileInView={{
          x: [0, 0, 0, 0],
          y: [0, 5, 0, 0],
          opacity: [1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className={`relative h-[500px] max-lg:h-[400px] max-md:h-[200px] grid place-items-center `}
      >
        <div className="flex flex-col items-center justify-center">
          <div className=" bg-black text-center text-white bg-opacity-80 rounded-lg p-4 -mt-4 -ml-10 shadow-2xl hover:skew-y-2 transition ease-out hover:scale-125 hover:shadow-xl hover:shadow-teal-200">
            <p className="p-text font-Poppins text-xl max-md:text-sm font-thin pt-5">
              I have developed a solid foundation in
              <br /> various technologies such as
              <br />
              JavaScript, ReactJs, NextJs,
              <br />
              Tailwind, Bootstrap, RestAPI,
              <br />
              MaterialUI, Git, GitHub, SQL and NoSQL.
              <br />
              This has enabled me to build
              <br /> responsive and user-friendly <br />
              websites and applications.
            </p>
            <p className="p-text font-Poppins pb-0">UX-UI Designer</p>
          </div>
        </div>
      </motion.div>
    </section>
  </div>
);

export default About;
