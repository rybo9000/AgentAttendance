import React from "react";
import ReactDOM from "react-dom";

import MCStats from "./MCStats.js";

it("MCStats Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<MCStats />, div);

  ReactDOM.unmountComponentAtNode(div);
});
