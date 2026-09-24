import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href?: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  const body = (
    <>
      <Image
        src={src}
        alt={title}
        width={1280}
        height={720}
        className="w-full aspect-video object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] block hover:border-purple-500/60 transition-colors"
      >
        {body}
      </a>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {body}
    </div>
  );
};

export default ProjectCard;
