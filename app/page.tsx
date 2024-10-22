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
      <div className="container mx-auto">
        <Navbar />
        <SidenavBar />
        <div className="container mx-auto px-4 sm:px-10 lg:px-20 pt-20">
          <section id="about" className="md:pt-2 min-h-screen">
            <About />
          </section>
          <section id="skills" className="md:pt-2 mt-16 sm:mt-24">
            <Skills />
          </section>
          <section id="certifications" className="md:pt-2 mt-32 sm:mt-40">
            <Certifications />
          </section>
          <section id="projects" className="md:pt-2 mt-32 sm:mt-40">
            <Projects />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
