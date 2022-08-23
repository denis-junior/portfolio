import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Project.css";

const Project = ({ title, description, technologies }) => {
  return (
    <div className="box-project">
      <header className="header-project">
        <FontAwesomeIcon icon={faFolder} className="folder-icon" />
        <a className="github-link">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
      </header>
      <main className="context-project">
        <h3 className="title-project">{title}title</h3>
        <p className="description-project">
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas molestias quidem id voluptate dolore laboriosam obcaecati nam
          atque repellat quasi sed veniam quo illum dolorum expedita, dolores
          vitae harum. Ullam.{" "}
        </p>
      </main>
      <footer className="footer-techs">
        {/* {technologies.map((tech, key) => {
                return(
                    <div key={key}>
                        <p className='tech-name'>{tech}</p>
                    </div>
                )
            })} */}
            <p className="tech-name">
        technologies here
            </p>
      </footer>
    </div>
  );
};

export default Project;
