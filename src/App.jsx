import React, { Component } from "react";
import Footer from "./components/Footer/";
import Education from "./components/Education/";
import Navbar from "./components/Navbar/";
import Experience from "./components/Experience/";
import Projects from "./components/Projects/";
import Skills from "./components/Skills/";
import { Home } from "./components/Home";
import "./App.css";

class App extends Component {
  state = {
    data: [],
  };
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Education />

        <Footer />
      </>
    );
  }
}

export default App;
