import React from "react";
import ReactDOM from "react-dom";

import LandingLove from "./LandingLove.js";

it("LandingLove Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LandingLove />, div);

  ReactDOM.unmountComponentAtNode(div);
});
