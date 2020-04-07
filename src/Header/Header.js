import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import logoSmall from "../img/logoSmall.png";
import Nav from "../Nav/Nav";

import "../config/style.css";
import "./Header.css";

// HEADER COMPONENT
class MainHeader extends React.Component {
  render() {
    return (
      <header className="full darkBackground headerMargin">
        <div className="container">
          <div className="headerContent">
            <img src={logoSmall} alt="Agent Attendance Logo" />
            <BurgerMenu />
            <Nav />
          </div>
        </div>
      </header>
    );
  }
}

export default MainHeader;
