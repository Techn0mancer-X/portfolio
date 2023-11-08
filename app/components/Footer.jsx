import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import Link from "next/link";
const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="footer border z-10 border-highlight border-l-transparent border-r-transparent ">
      <span className=" p-12 flex justify-around space-x-10">
        <span className="text-3xl items-center flex">LOGO</span>
        <div className="flex  w-full justify-around items-center lg:justify-center  text-5xl xl:space-x-20 xl:text-5xl">
             <Link
          href="https://www.linkedin.com/in/clayton-balzer/"
          target={"_blank"}
        >
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/Techn0mancer-X" target={"_blank"}>
          <FaGithub />
        </Link>
        </div>
       

      </span>
        <span className="text-accent flex justify-center items-center py-2 text-lg">
          &copy; {getCurrentYear()} All rights reserved.
        </span>
    </footer>
  );
};

export default Footer;
