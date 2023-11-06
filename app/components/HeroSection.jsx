"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-6 place-self-center place-items-center grid lg:place-items-start ">
          <div className="  max-w-fit text-3xl lg:text-6xl sm:text-xl font-extrabold mb-4  p-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primary via-white/75 to-primary text-6xl">
              I am Clayton Balzer
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Fullstack Developer.",
                3000,
                "UI/UX Designer.",
                3000,
                "Programmer.",
                3000,
                "Dungeon Master.",
                3000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "flex", wrap: "nowrap" }}
              repeat={Infinity}
              cursor={false}
            />
          </div>
          <span className=" lg:text-xl p-3 mb-6 text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <div className="mx-3 py-3 text-2xl  ">
            <button className="px-6 py-3 rounded-full mr-4 bg-accent text-black hover:bg-secondary/75 hover:text-white hover:border hover:border-red-500 w-full sm:w-fit bg-gradient-to-br from-primary via-white/50 to-primary mb-4">
              Hire Me
            </button>
            <button className="px-2 py-2 rounded-full mr-4  text-white hover:bg-secondary/75 hover:text-white hover:border hover:border-red-500 w-full sm:w-fit bg-gradient-to-br from-primary via-white/50 to-primary">
              <span className="block bg-black  rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-6 place-self-center mt-4 lg:mt-8">
          <div className="bg-secondary/25 border  lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] rounded-full relative  border-red-500">
            <Image
              src="/cyberpunk-profile-pic.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full  border border-white hover:scale-110 lg:hover:scale-125 cursor-pointer"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
