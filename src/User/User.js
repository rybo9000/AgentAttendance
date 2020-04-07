import React from "react";
import { Link } from "react-router-dom";

import go from "../img/go.png";

import "../config/style.css";
import "./User.css";

// USER ITEM
function User(props) {
  const theClass = `thing ${props.bgColor}`;

  const link = `/edituser/${props.id}`;

  return (
    <div className={theClass}>
      <span className="thingName">{`${props.firstname} ${props.lastname}`}</span>
    </div>
  );
}

export default User;
