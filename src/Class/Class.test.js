import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Class from "./Class.js";

it("Class Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Class />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
