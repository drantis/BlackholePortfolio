import Image from "next/image";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 h-[65px] w-full max-w-[100vw] bg-[#03001417] px-3 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md sm:px-6 md:px-10">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-row items-center justify-between gap-2">
        <a
          href="#about-me"
          className="flex min-w-0 flex-row items-center"
        >
          <Image
            src="/ub-logo.png"
            alt="Usman Babakura"
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 cursor-pointer object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="ml-2 hidden truncate font-bold text-gray-300 lg:block">
            Usman Abba Babakura
          </span>
        </a>

        <div className="mx-1 min-w-0 flex-1 justify-center sm:mx-3 md:flex md:max-w-md">
          <div className="flex w-full items-center justify-between gap-2 overflow-x-auto rounded-full border border-[#7042f861] bg-[#0300145e] px-3 py-2 text-[11px] text-gray-200 no-scrollbar sm:gap-4 sm:px-5 sm:text-sm md:text-[15px]">
            <a href="#about-me" className="shrink-0 cursor-pointer hover:text-white">
              About
            </a>
            <a href="#skills" className="shrink-0 cursor-pointer hover:text-white">
              Skills
            </a>
            <a href="#projects" className="shrink-0 cursor-pointer hover:text-white">
              Projects
            </a>
          </div>
        </div>

        <div className="flex shrink-0 flex-row items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/drantis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 transition-colors hover:text-white"
          >
            <RxGithubLogo className="text-xl sm:text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/usman-babakura-55329817a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 transition-colors hover:text-white"
          >
            <RxLinkedinLogo className="text-xl sm:text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
