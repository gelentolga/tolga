"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section
    className={`relative z-10 mb-0 h-[750px] max-md:h-[500px] justify-center items-center grid grid-cols-2 max-md:grid-cols-1`}
  >
    <div className="w-full h-full absolute  max-md:-bottom-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` pt-0 max-md:ml-0 `}
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
    </motion.div>
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
        y: [0, 20, 0, 0],
        opacity: [1, 1],
      }}
      transition={{ duration: 5, repeat: Infinity }}
      className={`relative h-[500px] max-lg:h-[400px] max-md:h-[200px] grid place-items-center `}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-100 bg-opacity-70 rounded-lg p-4 shadow-2xl flex w-64 max-md:w-34">
          <span className="text-[40px]">👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text font-Poppins">Hello there, I am</p>
            <h1 className="text-[40px] font-black font-Poppins">Tolga...</h1>
          </div>
        </div>
        <div className=" bg-gray-100 bg-opacity-60 rounded-lg p-4 -mt-4 -ml-32 shadow-2xl hover:skew-y-12 transition ease-out ">
          <span className="animate-ping absolute -mt-5 -m-4 inline-flex h-6 w-6 rounded-full bg-[#fb6342] opacity-100"></span>
          <p className="p-text font-Poppins">Frontend Developer/</p>
          <p className="p-text font-Poppins">UX-UI Designer</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
