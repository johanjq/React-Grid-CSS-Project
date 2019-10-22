import React, { PureComponent } from "react";
import { boxesData } from "./boxes.data";
import "./Boxes.css";

export class Boxes extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="boxes">
        {boxesData.map(item => (
          <div className="box" key={item.id}>
            <i className={item.class}></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    );
  }
}
