import React from "react";
import ReactDOM from "react-dom";

import AddClass from "./AddClass.js";

it("AddClass Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AddClass />, div);

  ReactDOM.unmountComponentAtNode(div);
});
