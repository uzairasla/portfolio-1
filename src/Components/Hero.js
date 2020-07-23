import React from "react";
import hero from "../images/hero.svg";
import "./Hero.css";

function Hero() {
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row">
          <div className="col-6 d-flex flex-wrap flex-column align-items-center mt-5">
            <p className="display-4 text-muted">Hi!</p>
            <p className="typing ">
              My name is Uzair Aslam, and i am a <span>UI/UX Designer</span> and
              a <span>Front End Developer.</span> I have skills in managing,
              designing and developing web solutions, through successful
              high-fidelity mockups, effective analysis, testing,
              troubleshooting and deployment.
            </p>
          </div>
          <div className="col-6">
            <img src={hero} className=" mt-3" />
          </div>
        </div>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default Hero;
