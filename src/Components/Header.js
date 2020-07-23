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
          <a href="#projects" className=" navLinks">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
