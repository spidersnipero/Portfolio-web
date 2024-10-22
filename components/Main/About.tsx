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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem.
        </p>
      </div>
    </div>
  );
};

export default About;
