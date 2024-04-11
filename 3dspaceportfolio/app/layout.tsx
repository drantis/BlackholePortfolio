"use client";

import React, { useEffect, useState, ReactNode } from "react";
import Head from "next/head";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [minWidth, setMinWidth] = useState<string>("100vw");

  useEffect(() => {
    const updateWidth = () => {
      const maxWidth = Math.max(window.innerWidth, window.innerHeight) + "px";
      setMinWidth(maxWidth);
    };

    // Add event listener for window resize and orientation change
    window.addEventListener("resize", updateWidth);
    window.addEventListener("orientationchange", updateWidth);

    // Set initial width
    updateWidth();

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("orientationchange", updateWidth);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className="bg-[#030014] overflow-y-scroll overflow-x-hidden"
        style={{ minWidth }}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
