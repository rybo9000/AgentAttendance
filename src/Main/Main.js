import React from "react";

import Header from "../Header/Header";
import TakeAttendance from "../TakeAttendance/TakeAttendance";
import MCStats from "../MCStats/MCStats";
import Footer from "../Footer/Footer";

import "../config/style.css";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);

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
