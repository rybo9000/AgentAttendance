import React from "react";
import ReactDOM from "react-dom";

import ReportSelector from "./ReportSelector.js";

it("ReportSelector Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<ReportSelector />, div);

  ReactDOM.unmountComponentAtNode(div);
});
