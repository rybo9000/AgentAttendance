import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Classes from "./Classes.js";

it.skip("Classes Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Classes />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
