import React from "react";
import { NavLink } from "react-router-dom";
import { SiOpenai } from "react-icons/si";

const Navbar = () => {
  return (
    <header className="shadow-xl mb-5">
      <div className="flex justify-around items-center h-24 max-w-[1240px] mx-auto px-4">
        <NavLink
          className="cursor-pointer stroke-1 duration-500 text-violet-800 hover:text-black"
          to="/"
          exact
        >
          <SiOpenai className="text-4xl xl:text-5xl" />
        </NavLink>
        <ul className="flex gap-10 md:text-lg xl:text-xl  font-bold">
          <li className="ease-out duration-200 hover:text-violet-800 hover:border-b-4 border-violet-800">
            <a
              href="https://github.com/Sevasit"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="ease-out duration-200 hover:text-violet-800 hover:border-b-4 border-violet-800">
            <a
              href="https://www.linkedin.com/in/%E0%B9%80%E0%B8%A8%E0%B8%A7%E0%B8%A8%E0%B8%B4%E0%B8%A9%E0%B8%8E%E0%B9%8C-%E0%B9%80%E0%B8%AA%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B4%E0%B8%A9%E0%B8%90%E0%B9%8C-45082a251/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
