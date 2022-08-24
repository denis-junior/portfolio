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
        <Project
          link={"https://github.com/denis-junior/todoTaskWithReactAndBootstrap"}
          title={"To-do Task"}
          description={
            "Application made with bootstrap and react to be presented to college freshmen."
          }
          technologies={["bootstrap", "react"]}
        />
        <Project
          link={"https://github.com/denis-junior/react-typescript-context"}
          title={"To-do Task Typescript"}
          description={
            "Same application used for presentation to freshmen but now using TypeScript and HOOK CONTEXT."
          }
          technologies={["typescript", "react", "bootstrap"]}
        />
        <Project
          link={"https://github.com/denis-junior/currency-converter"}
          title={"Currency Converter"}
          description={
            "Currency converter complete with backend and frontend with user authentication and can convert from euro to dollar and dollar to euro."
          }
          technologies={["typescript", "react", "node", "mongoDB"]}
        />
        <Project
          link={"https://github.com/denis-junior/entomologia-museu-solo"}
          title={"Entomology Museum frontend"}
          description={
            "Frontend made for the Entomology Museum of UFRA, a system requested in the matter of the College for finish the semester."
          }
          technologies={["bootstrap", "react"]}
        />
      </div>
    </div>
  );
};

export default Projects;
