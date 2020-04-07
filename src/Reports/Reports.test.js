import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Reports from "./Reports.js";

it.skip("Reports Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Reports />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
