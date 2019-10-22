import React, { PureComponent } from "react";
import { navigationData, imageHeader, memberships } from "./navigation.data";
import "./Navigation.css";

export class Navigation extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="main-nav">
          <ul>
            {navigationData.map(item => (
              <li key={item.id}>
                <a href="/">{item.navbarElement}</a>
              </li>
            ))}
          </ul>
        </nav>
        <section className="top-container">
          {imageHeader.map(items => (
            <header className="showcase" key={items.id}>
              <h1>{items.title}</h1>
              <p>{items.info}</p>
              <a href="/" className="btn">
                {this.props.buttonName}
              </a>
            </header>
          ))}
          {memberships.map(item => (
            <div className={item.class} key={item.id}>
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
              <a href="/" className="btn">
                Buy Now
              </a>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
