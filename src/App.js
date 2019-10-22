import React from "react";
import { Navigation } from "./components/Navigation";
import { Boxes } from "./components/Boxes";
import { Information } from "./components/Information";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import "./App.css";

export const App = () => {
  return (
    <div className="wrapper">
      <Navigation buttonName="Read More" />
      <Boxes />
      <Information />
      <Portfolio />
      <Footer />
    </div>
  );
};
