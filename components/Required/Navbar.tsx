// components/Navbar.tsx

import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <div
      className="container mx-auto fixed z-10  "
      style={{ marginTop: "5vh" }}
    >
      <nav className=" max-sm:w-4/5 md:w-1/2  mx-auto ">
        <ul className="flex  shadow-xl    justify-center items-center  py-3  rounded-full backdrop-blur-md  border-gray-200 border-2">
          {["About", "Skills", "Certifications", "Projects"].map((item) => (
            <li
              key={item}
              className={`relative text-lg cursor-pointer lg:px-5 md:px-3 px-1  text-gray-500 hover:text-zinc-900 `}
            >
              <p
                onClick={() =>
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {" "}
                {item}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
