import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navmain blackcolor">
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand whitecolor" href="#Name">
                <h2>Rishaß Ranjan</h2>
              </a>
            </div>
            <ul class="nav navhead">
              <li class="active">
                <a className="whitecolor" href="#Expirence">
                  Experience
                </a>
              </li>
              <li>
                <a className="whitecolor" href="#Projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="whitecolor" href="#Skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="whitecolor" href="#Education">
                  Education
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
