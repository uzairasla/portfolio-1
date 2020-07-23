import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import JobTabs from "./Components/Experience";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Hero />
        <div className="container">
          <JobTabs />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
