import React from "react";

import "../config/style.css";
import "./AddUser.css";

function AddUser(props) {
  const errorDiv = props.error ? (
    <div className="errorDiv">{props.error}</div>
  ) : (
    ""
  );

  return (
    <section className="half">
      <div className="halfTop redBackground">Add A User</div>
      <div className="halfBody">
        {errorDiv}
        <form className="halfForm" onSubmit={e => props.handleSubmit(e)}>
          <label htmlFor="firstname" className="halfFormLabel">
            First Name
          </label>
          <input
            type="text"
            className="halfFormInput"
            id="firstname"
            name="firstname"
            onChange={e => props.updateInput(e.target.name, e.target.value)}
            value={props.firstname}
          />
          <label htmlFor="name" className="halfFormLabel">
            Last Name
          </label>
          <input
            type="text"
            className="halfFormInput"
            id="lastname"
            name="lastname"
            onChange={e => props.updateInput(e.target.name, e.target.value)}
            value={props.lastname}
          />
          <label htmlFor="username" className="halfFormLabel">
            Username
          </label>
          <input
            type="text"
            className="halfFormInput"
            id="username"
            name="username"
            onChange={e => props.updateInput(e.target.name, e.target.value)}
            value={props.username}
          />
          <label htmlFor="password" className="halfFormLabel">
            Password
          </label>
          <input
            type="password"
            className="halfFormInput"
            id="password"
            name="password"
            onChange={e => props.updateInput(e.target.name, e.target.value)}
            value={props.password}
          />
          <label htmlFor="email" className="halfFormLabel">
            E-Mail Address
          </label>
          <input
            type="email"
            className="halfFormInput"
            id="email"
            name="email"
            onChange={e => props.updateInput(e.target.name, e.target.value)}
            value={props.email}
          />

          <button
            type="submit"
            className="halfFormButton"
            disabled={
              !(
                props.firstname &&
                props.lastname &&
                props.username &&
                props.password &&
                props.email
              )
            }
          >
            Submit
          </button>
        </form>
      </div>
      <div className="halfBottom redBackground"></div>
    </section>
  );
}

export default AddUser;
