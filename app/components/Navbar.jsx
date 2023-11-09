"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image"
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
  return (
    <nav className="fixed container mx-auto border border-highlight/50 top-0 left-0 right-0  z-10 bg-primary/90  ">
      <div className="flex lg:py-4 flex-wrap justify-between items-center mx-auto px-4 py-2 ">
        <Link
          href="/"
          className=" text-2xl md:text-5xl text-highlight font-semibold"
        >
          <Image src="/blue-ring.jpg" alt="blue ring logo" width={100} height={100} className="rounded-md"/>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center px-3 py-4 border border-highlight text-accent hover:text-accent hover:border-accent"
            >
              <GiHamburgerMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center px-3 py-4 border border-highlight text-accent hover:text-accent hover:border-accent"
            >
              <AiOutlineClose className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink title={link.title} href={link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
