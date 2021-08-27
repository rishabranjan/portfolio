import React, { Component } from "react";
import { Grid, Card } from "@material-ui/core";
import "./style/education.css";

class Education extends Component {
  state = {};
  render() {
    return (
      <div id="Education">
        <Card
          elevation={6}
          className="eduhead d-flex justify-content-around align-items-center"
        >
          <div className="pr-16">
            <h4 className="m-0 mb-8 text-white">Education</h4>
          </div>
          <img
            className="designer"
            src="landingPage/education.png"
            alt="designer"
            width="160px"
          />
        </Card>
        <section className="d-flex flex-center flex-middle section-one">
          <div className="d-flex flex-column flex-center  classroom classesDiv">
            <div className="d-flex flex-row flex-center classesDiv-content">
              <div
                style={{ position: "relative" }}
                className="online-features first-feature"
              >
                <i class="fas fa-graduation-cap"></i>
                <img
                  className="arrows arrow1"
                  src="landingPage/Arrowup.png"
                  alt=""
                />
                <h1>Netaji Subhash Engineering College</h1>
                <p className="text-muted">Garia, Kolkata — B.Tech</p>
                <p>IT Department 2016 - 2020</p>
              </div>
              <div
                style={{ position: "relative" }}
                className="online-features second-feature"
              >
                <i className="fas fa-university"></i>
                <img
                  className="arrows arrow2"
                  src="landingPage/Arrowdown.png"
                  alt=""
                />
                <h1>L. P. SHAHI COLLEGE</h1>
                <p className="text-muted">
                  Bypass Road, Patna— Higher Secondary
                </p>
              </div>
              <div className="online-features third-feature">
                <i class="fas fa-school"></i>
                <h1>Sherwood High School</h1>
                <p className="text-muted">Rajeev Nagar, Patna— Matriculation</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
