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
      skill: "TailwindCSS",
      level: 3,
    },
    {
      skill: "Next.js",
      level: 3,
    },

    {
      skill: "Flutter",
      level: 3,
    },

    {
      skill: "PosgreSQL",
      level: 3,
    },
    {
      skill: "TypeScript",
      level: 2,
    },
  ];
  const LowSkills = [
    "Git",
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
    <div>
      <h1 className="text-4xl flex justify-center">Tech Skills</h1>
      <div className="mt-10 grid grid-cols-2 gap-x-10   border-gray-300 ">
        {HighSkills.map((skill, index) => (
          <SkillCard key={index} sk={skill} />
        ))}
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-300 dark:bg-white/10" />
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-1/2">
          {LowSkills.map((skill, index) => (
            <div key={index} className="m-2 text-xl py-2 px-4 rounded-lg ">
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
