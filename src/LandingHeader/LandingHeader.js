import React from "react";
import LandingBurgerMenu from "../LandingBurgerMenu/LandingBurgerMenu";

import LandingNav from "../LandingNav/LandingNav";

import landingLogo from "../img/landingLogo.png";
import hamburger from "../img/hamburger.png";

import "../Landing/Landing.css";
import "./LandingHeader.css";

function LandingHeader() {
  return (
    <header className="landingHeader">
      <img src={landingLogo} alt="Agent Attendance Logo" />
      <LandingBurgerMenu right />
      {/* <span className='hamburger'>
                <img src={hamburger} alt='Hamburger Icon for Menu'/>
            </span> */}
      <LandingNav />
    </header>
  );
}

export default LandingHeader;
