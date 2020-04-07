import React from "react";
import ReactDOM from "react-dom";

import LandingFooter from "./LandingFooter.js";

it("LandingFooter Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LandingFooter />, div);

  ReactDOM.unmountComponentAtNode(div);
});
