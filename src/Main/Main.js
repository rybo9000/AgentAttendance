import React from "react";

import Header from "../Header/Header";
import TakeAttendance from "../TakeAttendance/TakeAttendance";
import MCStats from "../MCStats/MCStats";
import Footer from "../Footer/Footer";

import "../config/style.css";
import "./Main.css";

// MAIN PAGE AFTER SUCCESSFUL LOGIN
class Main extends React.Component {
  constructor(props) {
    super(props);

    // VERIFY JWT IF DOESN'T EXIST REDIRECT TO /LOGIN
    const token = localStorage.getItem("aatoken");

    if (!token) {
      this.props.history.push("/login");
    }
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Header />
        <main className="full siteContent">
          <div className="container">
            <TakeAttendance />
            <MCStats />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Main;
