import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Feedback from "./components/Feedback";

class App extends Component {
  state = {
    data: [],
  };
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:8000/getcourses")
  //     .then((res) => {
  //       this.setState({ data: res });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  render() {
    return (
      <>
        <Navbar />
        <div className="image">
          <div className="header">
            <h1>
              Hi there, I'm
              <span> Rishab Ranjan</span>
              <br />
            </h1>
            <h3>Software Developer, working in TCS as a Systems Engineer.</h3>
            <h4>
              I'm a driven, ambitious and bold learner who adapts and absorbs
              information quickly. I'm always up for a challenge and view it as
              an opportunity to express my preverance and ability to work hard.
            </h4>
            <br />
            <h4>
              You'll often catch me chasing after thoughts from my 3 am musings,
              hunting for the possibilities of functional reality in them.
            </h4>
            <div className="s-m">
              <a
                href="https://www.linkedin.com/in/rishab-ranjan-140745169/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/rishabranjan"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/therishabranjan/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/RishabRanjan17"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/rishab_ranjan/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Feedback />
        <Footer />
      </>
    );
  }
}

export default App;
