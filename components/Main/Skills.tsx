import React from "react";
import SkillCard from "@/components/Required/SkillCard";

const Skills = () => {
  const HighSkills = [
    {
      skill: "JavaScript",
      level: 4,
    },
    {
      skill: "React",
      level: 4,
    },
    {
      skill: "Java",
      level: 4,
    },
    {
      skill: "TailwindCSS",
      level: 3,
    },
    {
      skill: "SQL",
      level: 3,
    },
    {
      skill: "TypeScript",
      level: 2,
    },
    {
      skill: "Next.js",
      level: 2,
    },
  ];

  const LowSkills = [
    "Git",
    "Spring Boot",
    "Node.js",
    "Redux",
    "Java",
    "Material-UI",
    "CSS",
    "HTML",
    "MongoDb",
    "Express js",
    "Firebase",
    "Supabase",
    "Dart",
  ];

  return (
    <div className="container mx-auto py-8">
      {/* High-level skills */}
      <h1 className="text-4xl flex justify-center font-bold mb-6">
        Tech Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 lg:px-24">
        {HighSkills.map((skill, index) => (
          <SkillCard key={index} sk={skill} />
        ))}
      </div>

      {/* Divider */}
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-300 dark:bg-white/10 mx-auto w-3/4" />

      {/* Low-level skills */}
      <h2 className="text-3xl flex justify-center font-bold mb-4">
        Other Skills
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          {LowSkills.map((skill, index) => (
            <div
              key={index}
              className="m-2 bg-gray-200 text-xl py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
