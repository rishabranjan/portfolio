import React, { Component } from "react";
import Slider from "./Slider";
import "./style/feedback.css";
class Feedback extends Component {
  state = {};
  render() {
    return (
      <div id="Feedback">
        <section className="d-flex flex-center flex-middle section-two review-main-div">
          <div className="d-flex flex-column flex-center classroom reviews-div">
            <i className="fas fa-heart"></i>
            <h1 className="drawing-content-main-heading">Help me to Improve!</h1>
          </div>
        </section>
        <section className="d-flex flex-middle section-two slider-main-div">
          <div className="d-flex flex-column flex-center classroom slider-div">
            <Slider />
          </div>
        </section>
      </div>
    );
  }
}

export default Feedback;
