import React, { useState } from "react";
import { FaGithub, FaMedium, FaLinkedin, FaFileDownload } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

interface IconItem {
  name: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const SidenavBar: React.FC = () => {
  const list: IconItem[] = [
    {
      name: "Resume",
      link: "./Resume.pdf",
      icon: FaFileDownload,
      color: "text-red-500",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ajay-kota/",
      icon: FaLinkedin,
      color: "text-blue-800",
    },
    {
      name: "Github",
      link: "https://github.com/spidersnipero",
      icon: FaGithub,
      color: "text-gray-900",
    },
    {
      name: "Medium",
      link: "https://medium.com/@ajaykota2003",
      icon: FaMedium,
      color: "text-gray-900",
    },
  ];

  return (
    <div className="fixed z-20 sm:right-10 sm:bottom-32 bottom-0 w-full sm:w-auto bg-white sm:bg-transparent">
      <div
        className={`flex sm:flex-col flex-row items-center justify-center sm:items-end ${
          list.length > 1 ? "sm:gap-3 gap-6" : ""
        } py-3 sm:py-0`}
      >
        {list.map((item) => (
          <motion.div
            whileHover={{ scale: 1.3 }}
            key={item.name}
            className="relative bg-gray-200 rounded-full p-2 mb-0 sm:mb-3"
          >
            <Link href={item.link}>
              <item.icon
                className={`text-2xl text-gray-500 ${item.color} cursor-pointer`}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SidenavBar;
