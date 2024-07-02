import React from "react";

type Skill = {
  sk: {
    skill: string;
    level: number;
  };
};

function SkillCard({ sk }: Skill) {
  if (!sk) return null;
  var color = "bg-green-600";
  if (sk.level === 3) color = "bg-yellow-500";
  if (sk.level === 2) color = "bg-yellow-300";
  if (sk.level === 1) color = "bg-slate-500";
  return (
    <div className="flex justify-between p-3 ">
      <p className="text-xl  ">{sk.skill}</p>
      <div className="w-2/3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-auto ">
        <div
          className={`${color} h-2.5 rounded-full `}
          style={{ width: sk.level * 20 + "%" }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;
