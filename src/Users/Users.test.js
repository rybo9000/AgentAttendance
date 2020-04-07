import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Users from "./Users.js";

it.skip("Users Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Users />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
