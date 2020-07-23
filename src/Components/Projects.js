import React from "react";
import "./projects.css";

const Projects = ({
  projectImg,
  projectTitle,
  githubLink,
  projectLink,
  children,
}) => {
  return (
    <div className="card mt-3">
      <img className="card-img-top" src={projectImg} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{projectTitle} </h5>
        <p className="card-text">{children}</p>
        <div className="float-right">
          <a href={githubLink} target="_blank" className="card-link">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a href={projectLink} target="_blacnk" className="card-link">
            <i className="fa fa-link fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
