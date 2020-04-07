import React from "react";

import landingLogo from "../img/landingLogo.png";

import "./Login.css";
import config from "../config/config.js";

// LOGIN PAGE
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      marketcenter: null,
      mclist: [],
      error: null,
    };
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  // HANDLE SUBMIT
  submitHandler = (e) => {
    e.preventDefault();

    const { username, password, mcid } = this.state;

    const signupData = {
      username,
      password,
      mcid,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    };

    // POST TO ENDPOINT TO ATTEMPT SIGNIN
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/signin`, options)
      .then((response) => response.json())
      .then((response) => {
        let token = response;

        // IF TOKEN COMES BACK SUCCESSFULLY PUT INTO LOCAL STORAGE AND REDIRECT
        if (typeof token === "string") {
          window.localStorage.setItem("aatoken", token);
          this.props.history.push("/main");
        } else {
          // IF LOGIN UNSUCCESSFUL CLEAR FIELDS AND POST ERROR
          this.setState({
            username: "",
            password: "",
            marketcenter: null,
            error: response.error,
          });
        }
      });
  };

  componentDidMount() {
    // WHEN PAGE LOADS REMOVE LOCAL STORAGE IF IT EXISTS
    localStorage.removeItem("aatoken");

    // PULL LIST OF CLASSES FROM DB TO POPULATE SELECT
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/signin/classes`)
      .then((response) => response.json())
      .then((response) => {
        const marketcenterlist = response.map((marketcenter) => {
          return (
            <option value={marketcenter.id} key={marketcenter.id}>
              {marketcenter.mcname}
            </option>
          );
        });

        this.setState({
          mclist: marketcenterlist,
        });
      });
  }

  render() {
    // IF ERROR EXISTS DISPLAY HERE
    const displayError = !this.state.error ? (
      ""
    ) : (
      <div className="errorDiv">{this.state.error}</div>
    );

    return (
      <div className="loginBody">
        <div className="loginWrapper">
          <img src={landingLogo} alt="Agent Attendance Logo" />
          {displayError}
          <div className="loginContainer">
            <form className="loginForm">
              <div>
                <label htmlFor="username" className="loginLabel">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="loginControl"
                  value={this.state.username}
                  onChange={(e) =>
                    this.handleChange(e.target.name, e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="password" className="loginLabel">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="loginControl"
                  value={this.state.password}
                  onChange={(e) =>
                    this.handleChange(e.target.name, e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="mcid" className="loginLabel">
                  Market Center
                </label>
                <select
                  id="mcid"
                  name="mcid"
                  className="loginControl"
                  value={this.state.mcid}
                  onChange={(e) =>
                    this.handleChange(e.target.name, e.target.value)
                  }
                >
                  <option value={null}>Select Your Market Center</option>
                  {this.state.mclist}
                </select>
              </div>
              <button
                type="submit"
                className="loginButton"
                disabled={
                  !(
                    this.state.username &&
                    this.state.password &&
                    this.state.mcid
                  )
                }
                onClick={(e) => this.submitHandler(e)}
              >
                Login
              </button>
            </form>
            <span className="demoText">
              <strong>DEMO LOGIN CREDENTIALS</strong>
            </span>
            <span className="demoText">
              <strong>u:</strong> demo <strong>p:</strong> 1234{" "}
              <strong>mc:</strong> demo
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
