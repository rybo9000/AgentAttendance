import React from "react";
import { Link } from "react-router-dom";

import exclusive from "../img/exclusive.png";

import "../config/style.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="full darkBackground footerMargin">
      <div className="container">
        <div className="footerDiv footerDivPadding">
          <span className="footerTopHeader">NAVIGATE</span>
          <ul>
            <li>
              <Link to="/main">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
        <div className="footerDiv footerDivPadding">
          <span className="footerTopHeader">PARTICIPATE</span>
          <ul>
            <li>
              <Link to="/main">Report A Bug</Link>
            </li>
          </ul>
        </div>
        <div className="footerDiv footerDivPadding">
          <span className="footerTopHeader ">RESOURCES</span>
          <ul>
            <li>
              <Link to="/main">Flyers & Signs</Link>
            </li>
            <li>
              <Link to="/main">Recommended Tablets</Link>
            </li>
            <li>
              <Link to="/main">Upload Users</Link>
            </li>
          </ul>
        </div>
        <div className="footerDiv" id="footerLogo">
          <img src={exclusive} alt="Made Exclusively For KW Market Centers" />
        </div>
      </div>
      <div className="full veryDarkBackground">
        <div className="container">
          <div className="copyright">&copy; ATX Tech Services 2020</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
