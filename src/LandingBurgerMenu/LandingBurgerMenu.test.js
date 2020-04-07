import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import LandingBurgerMenu from "./LandingBurgerMenu.js";

it("LandingBurgerMenu Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <LandingBurgerMenu />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
