import React from "react";
import ReactDOM from "react-dom";

import CheckIn from "./CheckIn.js";

it.skip("CheckIn Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<CheckIn />, div);

  ReactDOM.unmountComponentAtNode(div);
});
