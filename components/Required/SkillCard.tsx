import React from "react";

type Skill = {
  sk: {
    skill: string;
    level: number;
  };
};

function SkillCard({ sk }: Skill) {
  if (!sk) return null;

  // Define color based on the skill level
  let color = "bg-green-600";
  if (sk.level === 3) color = "bg-yellow-500";
  if (sk.level === 2) color = "bg-yellow-300";
  if (sk.level === 1) color = "bg-slate-500";

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4">
      {/* Skill name */}
      <p className="text-lg font-semibold text-gray-700 w-1/3 max-sm:w-1/2">
        {sk.skill}
      </p>

      {/* Progress bar */}
      <div className="w-2/3 max-sm:w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`${color} h-2.5 rounded-full transition-all duration-500 ease-in-out`}
          style={{ width: sk.level * 20 + "%" }} // Skill level controls width
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;
