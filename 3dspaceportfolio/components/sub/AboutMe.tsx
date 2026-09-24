import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="relative z-30 min-h-screen flex items-center justify-center p-10"
    >
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/about-bg.png"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="relative max-w-5xl mx-auto p-10 bg-opacity-90 bg-black rounded-xl shadow-2xl backdrop-blur border border-[#2A0E61]/60">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-white text-center md:text-left">
              Usman Abba Babakura
            </h2>
            <p className="mt-2 text-sm text-purple-300 text-center md:text-left">
              AI Software Developer
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              I build AI agents that plan, use tools under real permissions,
              stay cheap, and know when to quit. The goal is simple: systems
              teams can trust in production, not demos that die in a notebook.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Over half a decade shipping production software, including
              systems that run live, on-air on Ross Video&apos;s{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                three-time Emmy-winning
              </span>{" "}
              platforms. I own their internal agentic cloud platform. Python,
              TypeScript, Java, Go.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              When I&apos;m offline, I&apos;m usually capturing the world
              through my lens.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="mailto:drantis@live.com"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
              >
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/usman-babakura-55329817a/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#7042f861] hover:border-purple-500/60 text-gray-200 font-semibold py-3 px-6 rounded-full transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/drantis"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#7042f861] hover:border-purple-500/60 text-gray-200 font-semibold py-3 px-6 rounded-full transition duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 mb-8 md:mb-0 flex justify-center md:justify-end">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center p-2 shadow-lg shadow-purple-900/40">
              <Image
                src="/profilePic.png"
                alt="Profile Picture"
                width={192}
                height={192}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
