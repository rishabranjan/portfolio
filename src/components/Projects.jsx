import React, { Component } from "react";
import { Grid, Card } from "@material-ui/core";
import "./style/projects.css";
import ProjectNav from "./ProjectNav";
import ProjectDetails from "./ProjectDetails";

class Projects extends Component {
  state = {
    currentProject: {
      number: 1,
      name: "RentIT - Video Renting App",
      details:
        " A react website to see details of all the videos and keep track of your movies, add new movies, rent it, etc.",
      techs: ["HTML", "CSS", "BOOTSTRAP", "REACT"],
      links: "https://github.com/rishabranjan/RentIT",
    },
    projects: [
      {
        number: 1,
        name: "RentIT - Video Renting App",
        details:
          " A react website to see details of all the videos and keep track of your movies, add new movies, rent it, etc.",
        techs: ["HTML", "CSS", "BOOTSTRAP", "REACT"],
        links: "https://github.com/rishabranjan/RentIT",
      },
      {
        number: 2,
        name: "GAME - Rock Paper Scissors",
        details:
          " A basic website designed in ReactJS to play Rock Paper Scissors game and various other small websites.",
        techs: ["HTML", "CSS", "BOOTSTRAP", "REACT"],
        links: "https://rishabranjan.github.io/rock-paper-scissors/",
      },
      {
        number: 3,
        name: "Github Search",
        details:
          " This is a basic react app using github api using semantic-ui and hooks. You can enter your username on the search button to get your details simple and straight.",
        techs: ["HTML", "CSS", "Material UI", "REACT"],
        links: "https://rishabranjan.github.io/github-search/",
      },
      {
        number: 4,
        name: "Tic Tac Toe",
        details: "tic-tac-toe game with min-max algorithm.",
        techs: ["HTML", "CSS", "BOOTSTRAP", "Javascript"],
        links: "https://rishabranjan.github.io/tic-tac-toe/",
      },
    ],
  };

  onChange = (number) => {
    this.setState({ currentProject: number });
  };

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
            src="landingPage/project.jpg"
            alt="designer"
            width="180px"
          />
        </Card>
        <div className="projectmain">
          <Grid item md={3} sm={12} xs={12}>
            <ProjectNav
              projects={this.state.projects}
              currentProject={this.state.currentProject}
              onChange={this.onChange}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            {/* <Paper>xs=6</Paper> */}
            <ProjectDetails ProjectDetails={this.state.currentProject} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
