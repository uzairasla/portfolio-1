import React from "react";
import hero from "../images/hero.svg";
import "./Hero.css";

function Hero() {
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <span className="display-4 text-muted">Hi!</span>
            <p className="typing ">
              My name is Uzair Aslam, and i am a UI/UX Designer and a Front End
              Developer.
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
