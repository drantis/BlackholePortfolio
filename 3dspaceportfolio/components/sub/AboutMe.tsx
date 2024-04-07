import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="relative min-h-screen flex items-center justify-center p-10"
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/about-bg.png" // Path to the background image
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      {/* Content */}
      <div className="relative max-w-5xl mx-auto p-10 bg-opacity-90 bg-black rounded-xl shadow-2xl backdrop-blur">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-white text-center md:text-left">
              Crafting Experiences
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Welcome to my world of coding, where technology meets creativity.
              I specialize in building immersive digital experiences with a
              focus on clean design and user-friendly interfaces.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Outside the digital space, I explore the beauty of the outdoors
              through my lens, capturing moments and scenery that inspire my
              work.
            </p>
            <div className="mt-8 text-center md:text-left">
              <a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
              >
                Let's Talk
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 mb-8 md:mb-0 flex justify-center md:justify-end">
            {/* Profile image */}
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
