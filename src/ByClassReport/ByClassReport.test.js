import React from "react";
import ReactDOM from "react-dom";

import ByClassReport from "./ByClassReport.js";

it("ByClassReport Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<ByClassReport />, div);

  ReactDOM.unmountComponentAtNode(div);
});
