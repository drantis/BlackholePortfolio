import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="NoteHire"
          description="TypeScript product for hiring and notes workflows. Production UI on Vercel."
          href="https://note-hire.vercel.app"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Raising Talent"
          description="TypeScript web app for talent pipelines. Live product surface on Vercel."
          href="https://raising-talent.vercel.app"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="A* Pathfinding Visualizer"
          description="Python visualizer for A* pathfinding with custom obstacles and shortest-path playback."
          href="https://github.com/drantis/A-Pathfinding-Visualizer"
        />
      </div>
    </div>
  );
};

export default Projects;
