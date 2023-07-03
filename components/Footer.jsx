"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import Image from "next/image";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-black shadow-2xl max-md:shadow-lg rounded-b-full shadow-teal-300`}
  >
    <div className={`${styles.innerWidth}  mx-auto gap-8`}>
      {/* <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Image
            src="/headset.svg"
            alt="headset"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter Metaverse
          </span>
        </button>
      </div> */}

      <div className="flex flex-wrap items-center justify-center">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] pl-20 text-white">T G</h4>
          {/* <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p> */}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
