import React from "react";
import ReactDOM from "react-dom";

import ReportOptionsByClass from "./ReportOptionsByClass.js";

it("ReportOptionsByClass Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<ReportOptionsByClass />, div);

  ReactDOM.unmountComponentAtNode(div);
});
