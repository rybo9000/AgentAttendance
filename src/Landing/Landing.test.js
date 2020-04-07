import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Landing from "./Landing.js";

it("Landing Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Landing />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
