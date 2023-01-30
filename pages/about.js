import React from "react";

import Head from "next/head";

const About = () => (
  <div className="flex flex-col items-center p-6 mt-40 mx-20">
    <Head>
      <title>About | Graphic Designer</title>
    </Head>
    <h1 className="text-2xl font-bold">About</h1>
    <p className="py-4 text-gray-600">
      Hi, I'm a graphic designer with a passion for creating beautiful and
      effective designs. My experience spans across various industries,
      including advertising, fashion, and technology. My design philosophy is
      centered around simplicity, creativity, and accessibility.
    </p>
    <div className="py-4 mt-10">
      <h2 className="text-xl font-bold">Skills</h2>
      <ul className="flex flex-col text-gray-600">
        <li className="py-2">Adobe Creative Suite</li>
        <li className="py-2">Branding and Identity Design</li>
        <li className="py-2">Print Design</li>
        <li className="py-2">UI/UX Design</li>
      </ul>
    </div>
  </div>
);

export default About;
