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
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              Applied AI / full-stack engineer at Ross Video. 6+ years shipping
              production software — including systems that run live, on-air on
              Ross&apos;s three-time Emmy-winning platforms (10,000+ customers
              across 200+ countries: ABC, NBC, Fox News, CTV / Bell Media, Sky
              News, Disney&apos;s ESPN, Gray Television, and more).
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              Internally recruited onto Ross&apos;s AI team (Jan 2026) to rescue
              a year-stalled product integration, then to architect the
              company&apos;s governed autonomous-agent platform.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              Today I own Cerberus (evolved from Mercury): a multi-tenant,
              fail-closed agent fleet — Hermes runtime, tool governance,
              Bifrost model proxy, cost anomaly auto-block — used by real
              product teams to turn behavioural scenarios into deterministic
              tests. Prompt caching cut ~70–80% of fresh input tokens.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              Earlier in 2026: shipped the Scriptor × OverDrive integration as
              the NAB 2026 MVP, and personally delivered internal product demos
              to network buyers including NBC and CTV / Bell Media.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              Stack: Python, Java, TypeScript, Go. Promoted twice. Designated AI
              champion; selected to represent Ross at the OpenAI hackathon.
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
