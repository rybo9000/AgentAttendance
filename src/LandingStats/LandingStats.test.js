import React from "react";
import ReactDOM from "react-dom";

import LandingStats from "./LandingStats.js";

it("LandingStats Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LandingStats />, div);

  ReactDOM.unmountComponentAtNode(div);
});
