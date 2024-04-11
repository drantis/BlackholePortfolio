"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [minWidth, setMinWidth] = useState("100vw"); // Default to 100% of the viewport width
  const lastWidth = useRef(""); // Use ref to track the last width to avoid unnecessary state updates

  useEffect(() => {
    const updateWidth = () => {
      const maxDimension = `${Math.max(
        window.innerWidth,
        window.innerHeight
      )}px`;
      if (maxDimension !== lastWidth.current) {
        setMinWidth(maxDimension);
        lastWidth.current = maxDimension; // Update the ref with the new width
      }
    };

    // Add event listener for window resize and orientation change
    window.addEventListener("resize", updateWidth);
    window.addEventListener("orientationchange", updateWidth);

    // Initial minWidth setup
    updateWidth();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("orientationchange", updateWidth);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width" />
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
