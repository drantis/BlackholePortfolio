import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative z-30 w-full bg-transparent text-gray-200 p-[15px] border-t border-[#2A0E61]/40">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-6 py-8">
        <div className="flex flex-row items-center gap-8 flex-wrap justify-center">
          <a
            href="https://github.com/drantis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 hover:text-purple-300 transition-colors"
          >
            <RxGithubLogo className="text-xl" />
            <span className="text-[15px]">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/usman-babakura-55329817a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 hover:text-purple-300 transition-colors"
          >
            <RxLinkedinLogo className="text-xl" />
            <span className="text-[15px]">LinkedIn</span>
          </a>
          <a
            href="mailto:drantis@live.com"
            className="flex flex-row items-center gap-2 hover:text-purple-300 transition-colors"
          >
            <MdOutlineEmail className="text-xl" />
            <span className="text-[15px]">drantis@live.com</span>
          </a>
        </div>
        <div className="text-[14px] text-center text-gray-500">
          © Usman Abba Babakura {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
