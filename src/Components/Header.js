import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light">
      <div className="container ">
        <NavLink to="/" className=" h5 logo">
          UA
        </NavLink>
        <div className="ml-auto h5 mr-3">
          <NavLink to="#projects" className=" navLinks">
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
