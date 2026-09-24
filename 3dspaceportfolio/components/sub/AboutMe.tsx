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
              Applied AI · Full-stack · Ross Video
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              I&apos;ve spent 6+ years shipping production software at Ross
              Video — including the company&apos;s{" "}
              <span className="text-white font-semibold">
                three-time Emmy®-winning
              </span>{" "}
              broadcast platforms that run live, on-air for the biggest networks
              on earth: ABC, NBC, Fox News, Disney&apos;s ESPN, Sky News, CTV /
              Bell Media, Gray Television, and more. 10,000+ customers. 200+
              countries. That&apos;s the bar I build to.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              In 2026 I was internally recruited onto Ross&apos;s AI team to
              rescue a year-stalled product integration, then to architect the
              company&apos;s governed autonomous-agent platform from the ground
              up.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              Today I own Cerberus (evolved from Mercury): a multi-tenant,
              fail-closed agent fleet — Hermes runtime, tool governance,
              Bifrost model proxy, cost anomaly auto-block — used by real
              product teams. Prompt caching cut ~70–80% of fresh input tokens.
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
