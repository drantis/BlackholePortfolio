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
              AI Software Developer @ Ross Video
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              I build AI agents that actually ship — tool use under real
              permissions, cost controls, and hard stops so they don&apos;t fail
              open or burn budget overnight. Not demos that die in a notebook.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Day job: 6+ years shipping production software at Ross Video,
              including systems that run live on Emmy-winning broadcast
              platforms. Internally recruited onto the AI team to rescue a
              year-stalled product integration and architect the company&apos;s
              governed agent platform.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              If you&apos;ve got an agent or LLM system that needs to work in
              the real world, I&apos;m easy to reach.
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
