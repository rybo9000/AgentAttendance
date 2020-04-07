import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import LandingHeader from "./LandingHeader.js";

it("LandingHeader Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <LandingHeader />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
