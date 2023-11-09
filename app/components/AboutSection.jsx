"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Tailwind</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Inception U </li>
        <li>Fullstack Developer Program</li>
        <li>Calgary, Alberta</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>Tumii Transformations </li>
          <li>Aug. 2022 - Jan. 2023</li>
          <li> MS Power Platform Developer</li>
        </ul>
        <br/>
        <ul className="list-disc pl-2">
          <li>New Idea Machine</li>
          <li> Apr 2022 - Aug 2022</li>
          <li>Junior Fullstack Developer</li>
        </ul>
        <br/>
        <ul className="list-disc pl-2">
          <li>Inception U Fullstack Developer Program</li>
          <li>Sept 2021 - March 2022</li>
          <li>Student</li>
        </ul>
      </>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Inception U Fullstack Developer Program</li>
        <li>Certification 2</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/profile-pic.png"
          alt=""
          width={400}
          height={400}
          className="rounded-3xl"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-highlight mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a full stack developer with a passion for creating interactive
            and responsive web applications. I have experience working with{" "}
            <strong className="text-white">
              JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, Tailwind
              and Git.
            </strong>{" "}
            I am a quick learner and am always looking to expand my knowledge
            base and skillset. I am a team player and enjoy working with others
            to create amazing web applications.
          </p>
          <div className="flex flex-row  justify-start mt-8 py-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certification
            </TabButton> */}
          </div>
          <div>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
