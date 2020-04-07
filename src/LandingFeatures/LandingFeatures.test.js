import React from "react";
import ReactDOM from "react-dom";

import LandingFeatures from "./LandingFeatures.js";

it("LandingFeatures Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LandingFeatures />, div);

  ReactDOM.unmountComponentAtNode(div);
});
