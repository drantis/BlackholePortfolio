import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  live?: boolean;
}

const ProjectCard = ({ src, title, description, href, tags, live }: Props) => {
  const body = (
    <>
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1280}
          height={720}
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {live && (
          <span className="absolute top-3 right-3 rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow">
            Live
          </span>
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <h1 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-300 flex-1">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#7042f861] bg-[#030014]/80 px-2.5 py-0.5 text-[11px] text-purple-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {href && (
          <span className="mt-4 text-sm text-cyan-400 opacity-80 group-hover:opacity-100">
            View project →
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group relative z-10 flex h-full flex-col overflow-hidden rounded-xl border border-[#2A0E61] bg-[#030014]/70 shadow-lg shadow-[#2A0E61]/20 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-purple-900/30";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} cursor-pointer`}
      >
        {body}
      </a>
    );
  }

  return <div className={className}>{body}</div>;
};

export default ProjectCard;
