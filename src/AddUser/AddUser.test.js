import React from "react";
import ReactDOM from "react-dom";

import AddUser from "./AddUser.js";

it("AddUser Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AddUser />, div);

  ReactDOM.unmountComponentAtNode(div);
});
