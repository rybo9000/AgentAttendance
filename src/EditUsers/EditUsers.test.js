import React from "react";
import ReactDOM from "react-dom";

import EditUsers from "./EditUsers.js";

it("EditUsers Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<EditUsers />, div);

  ReactDOM.unmountComponentAtNode(div);
});
