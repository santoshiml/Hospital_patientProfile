import React, { Component } from "react";
import Flowchart from "react-simple-flowchart";

export default class Flowchart1 extends Component {
  constructor() {
    super();
    const code = `st=>start: X
  e=>end: End
  op1=>operation: Dr.Santoshi|department1
  op2=>operation: Dr.Patidar|department2
  submit=>subroutine: Connect With us|external:>/contact
  condition=>condition: Appointment?
  st(right)->op1(right)->op2(right)->condition(yes)->submit(bottom)
  condition(no)->e`;

    const opt = {
      x: 0,
      y: 0,
      "line-width": 3,
      "line-length": 50,
      "text-margin": 10,
      "font-size": 14,
      "font-color": "black",
      "line-color": "black",
      "element-color": "black",
      fill: "lightblue",
      "yes-text": "yes",
      "no-text": "no",
      "arrow-end": "block",
      scale: 1,
      symbols: {
        start: {
          "font-color": "black",
          "element-color": "black",
          "fill": "lightblue",
          "font-weight": "bold",
        },
        end: {
          "font-color": "black",
          "element-color": "black",
          "fill": "lightblue",
          "font-weight": "bold",
        },
      },
      flowstate: {
        department1: { fill: "lightblue" },
        department2: { fill: "lightblue" },
        external: { fill: "lightblue" },
      },
    };

    this.state = {
      code,
      opt,
      elementText: "Start",
    };
  }

  handleCodeChange(e) {
    this.setState({
      code: e.target.value,
    });
  }

  handleOptChange(e) {
    this.setState({
      opt: JSON.parse(e.target.value),
    });
  }

  render() {
    const { code, opt, elementText } = this.state;
    return (
      <div>
         <p id="main" className="flowChartheading"><b><center>For your Check-Up select Dr. <hr class="visionMissionhr" /></center></b></p><br/>
        <p>
          Last Selected Dr.- <strong>{elementText}</strong>
        </p>
        <Flowchart
          chartCode={code}
          options={opt}
          onClick={(elementText) => this.setState({ elementText })}
        />
      </div>
    );
  }
}
