import React from "react";
import "./LandingBurgerMenu.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class LandingBurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        right
        burgerButtonClassName={"landing_bm-burger-button"}
        burgerBarClassName={"landing_bm-burger-bars"}
        crossButtonClassName={"landing_bm-cross-button"}
        crossClassName={"landing_bm-cross"}
      >
        <Link id="landingSignup" className="menu-item" to="/signup">
          Sign Up
        </Link>
        <a id="landingAbout" className="menu-item" href="#about">
          About
        </a>
        <a id="landingFeatures" className="menu-item" href="#features">
          Classes
        </a>
        <Link id="landingLogin" className="menu-item" to="/login">
          Login
        </Link>
      </Menu>
    );
  }
}

export default LandingBurgerMenu;
