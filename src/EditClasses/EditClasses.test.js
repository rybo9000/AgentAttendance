import React from "react";
import ReactDOM from "react-dom";

import EditClasses from "./EditClasses.js";

it("EditClasses Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<EditClasses />, div);

  ReactDOM.unmountComponentAtNode(div);
});
