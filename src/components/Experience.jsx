import React, { Component } from "react";
import {
  Card,
  Icon,
  Avatar,
  Grid,
  Badge,
  Fab,
  Divider,
  IconButton,
  Button,
  withStyles,
  Hidden,
} from "@material-ui/core";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import "./style/experience.css";
import ExperienceCard from "./ExperianceCard";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div id="Expirence">
        <Card
          elevation={6}
          className="exphead d-flex justify-content-around align-items-center"
        >
          <div className="pr-16">
            <h4 className="m-0 mb-8 text-white">Experience</h4>
          </div>
          <img
            className="designer"
            src="landingPage/designer.svg"
            alt="designer"
          />
        </Card>
        <div className="company">
          <div className="company">
            <div className="card__edge-button">
              <Fab
                className="edge-vertical-line"
                size="medium"
                style={{ background: "#16d34e", color: "white" }}
              >
                <TrendingUpIcon />
              </Fab>
            </div>
            <ExperienceCard
              elevation={24}
              img={"landingPage/tcs.jpeg"}
              company={"Tata Consultancy Services"}
              designation={"System Engineer"}
              location={"Kolkata, West Bengal, India"}
              startDate={"Aug 2021"}
            />
          </div>
          <div className="company">
            <div className="separator"></div>
            <ExperienceCard
              img={"landingPage/Raitech.png"}
              company={"Rai Techintro"}
              designation={"Assistant System Engineer"}
              location={"Patna, Bihar, India"}
              startDate={"June 2020"}
              endDate={"Aug 2021"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
