import React from "react";
import ReactDOM from "react-dom";

import LandingTryFree from "./LandingTryFree.js";

it("LandingTryFree Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LandingTryFree />, div);

  ReactDOM.unmountComponentAtNode(div);
});
