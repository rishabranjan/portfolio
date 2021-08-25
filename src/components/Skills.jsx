import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grid, Card } from "@material-ui/core";
import "./style/skills.css";
import DragDrop from "./DragDrop";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: getItems(10),
      items: [
        { id: "1", content: "Java" },
        { id: "2", content: "Python" },
        { id: "3", content: "JavaScript" },
        { id: "4", content: "C" },
        { id: "5", content: "C++" },
      ],
      FrontEnd: [
        { id: "1", content: "HTML" },
        { id: "2", content: "CSS" },
        { id: "3", content: "Bootstrap" },
        { id: "4", content: "ReactJS" },
        { id: "5", content: "JavaScript" },
      ],
      BackEnd: [
        { id: "1", content: "MongoDB" },
        { id: "2", content: "Node" },
        { id: "3", content: "ExpressJs" },
      ],
    };
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div id="Skills">
        <Card
          elevation={6}
          className="skihead d-flex justify-content-around align-items-center"
        >
          <div className="pr-16">
            <h4 className="m-0 mb-8 text-white">Skills</h4>
          </div>
          <img
            className="designer"
            src="/landingPage/skills.png"
            alt="designer"
            width="170px"
          />
        </Card>
        <div className="d-flex justify-content-around">
          <div>
            <h3 className="text-muted">Languages</h3>
            <DragDrop items={this.state.items} />
          </div>
          <div>
            <h3 className="text-muted">Front End</h3>
            <DragDrop items={this.state.FrontEnd} />
          </div>
          <div>
            <h3 className="text-muted">Back End</h3>
            <DragDrop items={this.state.BackEnd} />
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
