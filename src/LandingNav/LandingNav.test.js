import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import LandingNav from "./LandingNav.js";

it("LandingNav Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <LandingNav />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
