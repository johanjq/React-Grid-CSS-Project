import React, { PureComponent } from "react";
import { informationData } from "./information.data";
import "./Information.css";

export class Information extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="info">
        <div>
          <img src="business.jpg" alt="" />
        </div>

        {informationData.map(items => (
          <div key={items.id}>
            <h2>{items.title}</h2>
            <p>{items.description}</p>
            <a href="/" className="btn">
              Learn More
            </a>
          </div>
        ))}
      </section>
    );
  }
}
