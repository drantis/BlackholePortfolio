"use client";

import React, { useEffect, useState, ReactNode } from "react";
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
    updateWidth();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>
          Usman Babakura | Production AI on Emmy®-Winning Broadcast Systems
        </title>
        <meta
          name="description"
          content="Applied AI engineer at Ross Video. Three-time Emmy®-winning live broadcast platforms. Governed agent fleets in production."
        />
      </head>
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
