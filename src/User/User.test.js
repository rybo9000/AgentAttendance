import React from "react";
import ReactDOM from "react-dom";

import User from "./User.js";

it("User Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<User />, div);

  ReactDOM.unmountComponentAtNode(div);
});
