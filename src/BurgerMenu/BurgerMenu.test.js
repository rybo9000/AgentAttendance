import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import BurgerMenu from "./BurgerMenu.js";

it("AddUser Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <BurgerMenu />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
