import React from "react";
import ReactDOM from "react-dom";

import LandingHero from "./LandingHero.js";

it("LandingHero Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LandingHero />, div);

  ReactDOM.unmountComponentAtNode(div);
});
