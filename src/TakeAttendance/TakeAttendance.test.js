import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import TakeAttendance from "./TakeAttendance.js";

it("TakeAttendance Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <TakeAttendance />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
