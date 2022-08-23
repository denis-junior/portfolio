import React from "react";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="main projects" id="projects">
      <h1 className="title-projects">Projects</h1>

      <p className="description-projects">
        Here are a few projects I’ve been working with recently:
      </p>

      <div className="projects-group">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
