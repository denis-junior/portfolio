import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./Projects.css"

const Projects = () => {
    return (   <div className="main projects" id="projects">
    <h1>
      Projects <hr />
    </h1>

    <p className="description">
      Here are a few projects that I’ve been working with recently:
    </p>
    <ul className="technologies-ul">
      <li className="technologies-li">        
        <FontAwesomeIcon icon={faCode} className="technologies-li-icon" /> &nbsp; React.JS
      </li>
      <li className="technologies-li">
        
        <FontAwesomeIcon icon={faCode} className="technologies-li-icon" /> &nbsp; Node.JS
      </li>
      <li className="technologies-li">
        
        <FontAwesomeIcon icon={faCode} className="technologies-li-icon" /> &nbsp; Express.JS
      </li>
      <li className="technologies-li">
        
        <FontAwesomeIcon icon={faCode} className="technologies-li-icon" /> &nbsp; Typescript
      </li>
      <li className="technologies-li">
        
        <FontAwesomeIcon icon={faCode} className="technologies-li-icon" /> &nbsp; MySQL
      </li>
    </ul>
  </div>
  )
}
 
export default Projects;