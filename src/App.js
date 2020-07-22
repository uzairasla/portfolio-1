import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
