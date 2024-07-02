import React, { useState } from "react";
import { FaGithub, FaMedium, FaLinkedin, FaFileDownload } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

interface IconItem {
  name: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SidenavBar: React.FC = () => {
  const list: IconItem[] = [
    {
      name: "Resume",
      link: "./Resume.pdf",
      icon: FaFileDownload,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ajay-kota/",
      icon: FaLinkedin,
    },
    {
      name: "Github",
      link: "https://github.com/spidersnipero",
      icon: FaGithub,
    },
    {
      name: "Medium",
      link: "https://medium.com/@ajaykota2003",
      icon: FaMedium,
    },
  ];

  return (
    <div className="fixed right-10 bottom-32 z-20">
      <div className="flex flex-col items-center">
        {list.map((item) => (
          <motion.div
            whileHover={{ scale: 1.3 }}
            key={item.name}
            className="relative bg-gray-200 rounded-full p-2 mb-3  "
          >
            <Link href={item.link}>
              <item.icon
                className={`text-2xl text-gray-500 ${
                  item.name == "LinkedIn"
                    ? "hover:text-blue-800"
                    : "hover:text-zinc-900"
                }`}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SidenavBar;
