"use client";
import React from "react";

import Navbar from "@/components/Required/Navbar";
import About from "@/components/Main/About";
import Skills from "@/components/Main/Skills";
import Projects from "@/components/Main/Projects";
import Certifications from "@/components/Main/Certifications";
import SidenavBar from "@/components/Main/SidenavBar";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="bg-gray-50 overflow-y-hidden">
      <div className=" container   mx-auto ">
        <Navbar />
        <SidenavBar />
        <div
          className={" container  max-sm:px-10  px-20  mx-auto  "}
          style={{ paddingTop: "20vh" }}
        >
          <section id="about" className="md:pt-2 min-h-screen">
            <About />
          </section>
          <section id="skills" className="md:pt-2">
            <Skills />
          </section>
          <section id="certifications" className="md:pt-2 mt-52">
            <Certifications />
          </section>
          <section id="projects" className="md:pt-2  mt-52">
            <Projects />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
