import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
// import styles from "../styles";
import Link from "next/link";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <motion.nav
        // variants={navVariants}
        // initial="hidden"
        // whileInView="show"
        className={`h-full backdrop-filter backdrop-blur-sm top-0 sticky z-50 m-0`}
      >
        <nav className="w-full z-50 pt-2 max-md:pt-0">
          <div className="justify-between px-4 max-md:px-2 mx-auto lg:max-w-7xl md:items-center md:flex">
            <div>
              <div className="flex items-center justify-between py-1 md:py-5 md:block">
                <Link
                  className="text-3xl hover:tracking-tight tracking-tighter font-semibold max-md:text-xl text-[#5332fd] font-fasthand p-5"
                  href="/"
                >
                  Tolga
                </Link>

                <div className="md:hidden">
                  <button
                    className="p-2 text[#eeeeee] rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text[#eeeeee]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text[#eeeeee]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8  md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-1 md:flex md:space-x-6 md:space-y-0">
                  <li className="text[#eeeeee]">
                    <Link href="/#work">Work</Link>
                  </li>
                  <li className="text[#eeeeee]">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="text[#eeeeee]">
                    <Link href="/contact">Contact US</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </motion.nav>
    </>
  );
};
export default Header;
