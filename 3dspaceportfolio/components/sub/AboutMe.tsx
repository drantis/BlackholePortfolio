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
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative max-w-5xl mx-auto p-10 bg-opacity-90 bg-black rounded-xl shadow-2xl backdrop-blur">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-white text-center md:text-left">
              Usman Abba Babakura
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Applied AI / full-stack engineer. Internally recruited onto Ross
              Video&apos;s AI team to ship production agent systems and rescue a
              year-stalled product integration shown at NAB 2026.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              I build fail-closed agent fleets, tool governance, cost controls,
              and the APIs/UIs product teams actually use — not demos that die
              in a notebook.
            </p>
            <div className="mt-8 text-center md:text-left">
              <a
                href="mailto:drantis@live.com"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 mb-8 md:mb-0 flex justify-center md:justify-end">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center p-2">
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
