import React, { PureComponent } from "react";
import "./Portfolio.css";
import { portfolioData } from "./portfolio.data";

export class Portfolio extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="portfolio">
        {portfolioData.map(item => (
          <img src={item.source} alt={item.id} />
        ))}
      </section>
    );
  }
}
