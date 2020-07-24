import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import JobTabs from "./Components/Experience";
import ProjectHelper from "./Components/ProjectHelper";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Hero />
        <div className="container">
          <h4
            className="display-4 text-center animate__animated animate__rollIn"
            id="experience"
          >
            Experience
          </h4>
          <JobTabs />
          <h4 className="display-4 text-center animate__animated animate__rollIn">
            Projects
          </h4>

          <ProjectHelper />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
