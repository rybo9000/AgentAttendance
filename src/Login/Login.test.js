import React from "react";
import ReactDOM from "react-dom";

import Login from "./Login.js";

it("Login Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Login />, div);

  ReactDOM.unmountComponentAtNode(div);
});
