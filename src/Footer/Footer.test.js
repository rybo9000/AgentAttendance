import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Footer.js";

it("Footer Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Footer />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
