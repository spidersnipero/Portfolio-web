import React from "react";
import Image from "@/components/Required/Image";
import { Montserrat } from "next/font/google";

const moss = Montserrat({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});

const About = () => {
  return (
    <div className="px-4 sm:px-10">
      <div className="mt-10 flex items-center justify-around flex-col md:flex-row md:space-x-8">
        <Image />
        <div className="text-center md:text-left mt-6 md:mt-0">
          <div className="mb-2">
            <p className="text-xl">Hey, I'm</p>
          </div>
          <div>
            <h1 className={`${moss.className} text-4xl md:text-6xl font-bold`}>
              Ajay Kota
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          About Me
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed indent-4 md:indent-8">
          I'm a passionate Full Stack Developer with a knack for bringing web
          applications to life. With a background in React, Next.js, and
          Node.js, I enjoy tackling challenges and creating robust,
          user-friendly applications. Driven by curiosity, I'm always
          experimenting with new frameworks and libraries, constantly expanding
          my skill set. I'm on the lookout for exciting projects where I can
          contribute, grow, and make a meaningful impact through code.
        </p>
      </div>
    </div>
  );
};

export default About;
