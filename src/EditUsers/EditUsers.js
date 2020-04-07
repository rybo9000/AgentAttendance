import React from "react";

import User from "../User/User";

import "../config/style.css";
import "./EditUsers.css";

// EDIT USERS COMPONENT
function EditUsers(props) {
  // ITERATE THROUGH THE ARRAY AND BUILD THE USER LIST TO POPULATE THE GUI
  const users = props.users.map((user, index) => {
    const bgColor = index % 2 === 0 ? "whiteBackground" : "lightGrayBackground";

    return (
      <User
        firstname={user.firstname}
        lastname={user.lastname}
        id={user.id}
        key={index}
        bgColor={bgColor}
      />
    );
  });

  return (
    <section className="half" id="editUsers">
      <div className="halfTop darkBackground twoRem">Active Users</div>
      {users}
      <div className="halfBottom darkBackground"></div>
    </section>
  );
}

EditUsers.defaultProps = {
  users: [],
};

export default EditUsers;
