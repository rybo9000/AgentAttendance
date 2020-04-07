import React from "react";
import ReactDOM from "react-dom";

import Main from "./Main.js";

it.skip("Main Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Main />, div);

  ReactDOM.unmountComponentAtNode(div);
});
