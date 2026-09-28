"use client";

import React, { ReactNode } from "react";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Usman Babakura | AI Software Developer</title>
        <meta
          name="description"
          content="AI Software Developer. I build production AI agents with permissions, cost controls, and hard stops."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon-ub.png" type="image/png" />
        <link rel="apple-touch-icon" href="/ub-logo.png" />
      </head>
      <body className="bg-[#030014] overflow-y-auto overflow-x-hidden max-w-[100vw]">
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
