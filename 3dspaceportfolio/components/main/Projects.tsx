import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projects = [
  {
    src: "/notehire-shot.png",
    title: "NoteHire",
    description:
      "AI interview notes for recruiters. Speaker-aware transcripts become structured summaries, scorecards, red flags, and follow-ups in about 30 seconds.",
    href: "https://note-hire.vercel.app",
    tags: ["Next.js", "TypeScript", "LLM"],
    live: true,
  },
  {
    src: "/raising-talent-shot.png",
    title: "Raising Talents",
    description:
      "Full-stack talent–agent marketplace: discovery, portfolios, matching, messaging, and admin — built end to end.",
    href: "https://raising-talent.vercel.app",
    tags: ["Next.js", "Supabase", "TypeScript"],
    live: true,
  },
  {
    src: "/thin-agent-shot.png",
    title: "Permissioned Thin Agent",
    description:
      "One-job agent loop with visible tools, fail-closed write permissions, and a hard stop. Plans → reads notes → writes a cited brief — then quits. Demo available on request.",
    tags: ["Python", "Agents", "Permissions"],
    live: false,
  },
  {
    src: "/kb-shot.png",
    title: "Personal Knowledge Base",
    description:
      "Local notes → embeddings → grounded answers. A small RAG system that answers from your files instead of inventing context. Demo available on request.",
    tags: ["Python", "RAG", "Embeddings"],
    live: false,
  },
  {
    src: "/pathfinding-shot.png",
    title: "A* Pathfinding Visualizer",
    description:
      "Python visualizer for A* with custom obstacles and shortest-path playback — algorithms you can watch.",
    href: "https://github.com/drantis/A-Pathfinding-Visualizer",
    tags: ["Python", "Algorithms"],
    live: false,
  },
  {
    src: "/elevator-shot.png",
    title: "Realtime Elevator System",
    description:
      "Multithreaded elevator control over UDP with state machines, JUnit coverage, and a GUI visualizer.",
    href: "https://github.com/drantis/Realtime-concurrent-multithreaded-Elevator-System",
    tags: ["Java", "Concurrency", "UDP"],
    live: false,
  },
];

const Projects = () => {
  return (
    <div
      className="relative z-30 flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Selected work
      </h1>
      <p className="mb-12 max-w-2xl px-6 text-center text-gray-400">
        Production-shaped builds. AI products, agent systems, and systems work.
      </p>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
