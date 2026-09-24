import {
  Backend_skill,
  Career_skill_labels,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillsText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-30 flex flex-col items-center justify-center gap-3 h-full overflow-hidden pb-40 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="w-full max-w-4xl px-6 flex flex-col gap-4 mb-8">
        {Career_skill_labels.map((row) => (
          <div
            key={row.title}
            className="rounded-lg border border-[#2A0E61] bg-black/40 px-5 py-4"
          >
            <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">
              {row.title}
            </h3>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
              {row.items}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={`core-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={`fe-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={`be-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={`fs-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
