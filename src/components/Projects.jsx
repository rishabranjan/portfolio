import React, { Component } from "react";
import { Grid, Card } from "@material-ui/core";
import "./style/projects.css";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div id="Projects">
        <Card
          elevation={6}
          className="prohead d-flex justify-content-around align-items-center"
        >
          <div className="pr-16">
            <h4 className="m-0 mb-8 text-white">Projects</h4>
          </div>
          <img
            className="designer"
            src="/landingPage/project.jpg"
            alt="designer"
            width="180px"
          />
        </Card>
        RentIT - Video Renting App A react website to see details of all the
        videos and keep track of your movies using React JS. Delivery - Courier
        Delivery System A basic website to see details of all the deliveries and
        keep track of your delivery’s last location using HTML, CSS, JAVASCRIPT.
        GAME - Rock Paper Scissors A basic website designed in ReactJS to play
        Rock Paper Scissors game and various other small websites.
      </div>
    );
  }
}

export default Projects;
