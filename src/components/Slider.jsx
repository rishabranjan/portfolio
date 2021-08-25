import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "./style/slider.css";

class Slider extends Component {
  state = {
    itemsToShow: 2,
  };

  render() {
    return (
      <Carousel
        autoPlaySpeed={3000}
        showArrows={false}
        enableAutoPlay={true}
        pagination={false}
        itemsToShow={
          window.innerWidth <= 400 ? 1 : window.innerWidth <= 790 ? 2 : 4
        }
        itemsToScroll={1}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={1000}
      >
        {[
          {
            img: "landingPage/girl1.png",
            para: "The design is clean and nice.",
            name: "#CleanDesign",
          },
          {
            img: "/landingPage/boy1.png",
            para: "It’s got video calling capabilities. You can do live classes with your students.",
            name: "#NiceColors",
          },
          {
            img: "/landingPage/girl2.png",
            para: "Create group and invite all students at once. No need to add students every time you create a live session.",
            name: "#Smoothness",
          },
          {
            img: "landingPage/girl3.png",
            para: "Integrations of apps you already use and love like Spotify, Youtube Music and more. (Currently in testing, but its coming).",
            name: "#ColorCombination",
          },
        ].map((avatar, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "white",
              }}
              className="main-slider"
            >
              <div className="d-flex slider-main-div">
                <div className="d-flex flex-column content-sect">
                  <img
                    src={avatar.img}
                    className="img-responsive"
                    alt="profile"
                  />
                  <p className="firstP">{avatar.para}</p>
                  <p className="lastP">{avatar.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default Slider;