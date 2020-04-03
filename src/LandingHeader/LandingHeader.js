import React from "react";
import LandingBurgerMenu from "../LandingBurgerMenu/LandingBurgerMenu";

import LandingNav from "../LandingNav/LandingNav";

import landingLogo from "../img/landingLogo.png";

import "../Landing/Landing.css";
import "./LandingHeader.css";

function LandingHeader() {
  return (
    <header className="landingHeader">
      <img src={landingLogo} alt="Agent Attendance Logo" />
      <LandingBurgerMenu right />
      <LandingNav />
    </header>
  );
}

export default LandingHeader;
