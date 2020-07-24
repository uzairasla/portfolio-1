import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className=" h5 logo">
          UA
        </NavLink>

        <div className="ml-auto h5 mr-3">
          <a href="#projects" className=" navLinks mr-5">
            Projects
          </a>
          <a href="#experience" className=" navLinks mr-5">
            Experience
          </a>
          <a
            href="https://docs.google.com/document/d/1HDWGVqKGTePlIWffWaFhIDAu0v2YPxSCOJyIPGakgNQ/edit?usp=sharing"
            target="_blank"
            className=" navLinks "
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
