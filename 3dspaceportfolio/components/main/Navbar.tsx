import Image from "next/image";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo3.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Usman Abba Babakura
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-white">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-white">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-white">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <a
            href="https://github.com/drantis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <RxGithubLogo className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/usman-babakura-55329817a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <RxLinkedinLogo className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
