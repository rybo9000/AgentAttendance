import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

it("App Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});
