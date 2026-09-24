import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="relative z-30 flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/notehire-shot.png"
          title="NoteHire"
          description="AI interview notes for recruiters. Structured summaries and scorecards from recordings in about 30 seconds."
          href="https://note-hire.vercel.app"
        />
        <ProjectCard
          src="/raising-talent-shot.png"
          title="Raising Talents"
          description="Talent discovery platform connecting creators with agents. Profiles, matching, and messaging."
          href="https://raising-talent.vercel.app"
        />
        <ProjectCard
          src="/pathfinding-shot.png"
          title="A* Pathfinding Visualizer"
          description="Python visualizer for A* pathfinding with custom obstacles and shortest-path playback."
          href="https://github.com/drantis/A-Pathfinding-Visualizer"
        />
      </div>
    </div>
  );
};

export default Projects;
