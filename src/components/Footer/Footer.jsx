import React, { PureComponent } from "react";
import { footerData } from "./footer.data";
import "./Footer.css";

export class Footer extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <footer>
        {footerData.map(item => (
          <p>{item.title}</p>
        ))}
      </footer>
    );
  }
}
