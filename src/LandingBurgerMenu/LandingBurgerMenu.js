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
        <Link id="home" className="menu-item" to="/main">
          Home
        </Link>
        <Link id="users" className="menu-item" to="/users">
          Users
        </Link>
        <Link id="classes" className="menu-item" to="/classes">
          Classes
        </Link>
        <Link id="reports" className="menu-item" to="/reports">
          Reports
        </Link>
        <Link id="Logout" className="menu-item" to="/login">
          Logout
        </Link>
      </Menu>
    );
  }
}

export default LandingBurgerMenu;
