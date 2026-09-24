"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Ross Video · Three-time Emmy®-winning platforms
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white max-w-[680px] w-auto h-auto"
        >
          <span>
            I build AI that ships on
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Emmy®-winning
            </span>{" "}
            live broadcast systems
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[620px] leading-relaxed"
        >
          6+ years at Ross Video. The platforms I work on run live for ABC, NBC,
          Fox News, ESPN, Sky News, CTV / Bell Media, and thousands more —
          across 200+ countries. Recruited onto the AI team to own governed
          agent fleets in production. Not demos. Real on-air software.
        </motion.p>
        <div className="flex flex-row gap-4 flex-wrap">
          <motion.a
            variants={slideInFromLeft(1)}
            href="#projects"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-4"
          >
            See projects
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1.2)}
            href="mailto:drantis@live.com"
            className="py-2 text-center text-gray-300 cursor-pointer rounded-lg max-w-[200px] px-4 border border-[#7042f861] hover:border-purple-500/60 transition-colors"
          >
            Contact
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
