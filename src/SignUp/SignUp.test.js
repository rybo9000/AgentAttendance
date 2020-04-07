import React from "react";
import ReactDOM from "react-dom";

import SignUp from "./SignUp.js";

it("SignUp Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<SignUp />, div);

  ReactDOM.unmountComponentAtNode(div);
});
