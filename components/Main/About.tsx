import React from "react";
import Image from "@/components/Required/Image";
import { Montserrat, Inter } from "next/font/google";

const moss = Montserrat({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});

const About = () => {
  return (
    <div className="">
      <div className=" flex  items-center max-sm:flex-col justify-around    ">
        <Image />
        <div className="">
          <div className="">
            <p className="text-xl ">Hey , I'm </p>
          </div>
          <div className="max-sm:px-10">
            <h1
              className={` ${moss.className} px-auto md:text-6xl text-4xl font-bold`}
            >
              Amelia Rodriguez
            </h1>
          </div>
        </div>
      </div>
      <div className={` max-sm:mt-4 md:mt-10 max-sm:justify-center`}>
        <h1 className="text-4xl">About Me</h1>
        <p
          className={`md:indent-8 md:mt-4 max-sm:indent-4 max-sm:mt-2 mt-4 font-3xl`}
        >
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
