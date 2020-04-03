import React from "react";
import JWT from "jsonwebtoken";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ReportSelector from "../ReportSelector/ReportSelector";
import ReportOptionsByClass from "../ReportOptionsByClass/ReportOptionsByClass";
import ByClassReport from "../ByClassReport/ByClassReport";

import config from "../config/config.js";
import "../config/style.css";
import "./Reports.css";

class Reports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reportSelect: null,
      selectedClass: null,
      classList: [],
      rows: [],
    };
  }

  handleUpdate = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  fetchRows = (selectedClass) => {
    if (selectedClass !== "") {
      const token = localStorage.getItem("aatoken");
      const decodedJWT = JWT.verify(token, config.REACT_APP_JWT_SECRET);

      fetch(
        `${config.REACT_APP_API_ENDPOINT}/api/reports/byclass?&classid=${selectedClass}&mcid=${decodedJWT.mcid}`
      )
        .then((results) => results.json())
        .then((response) => {
          console.log(response);

          this.setState({
            rows: response,
          });
        });
    } else {
      this.setState({
        rows: [],
      });
    }
  };

  componentDidMount() {
    const token = localStorage.getItem("aatoken");

    if (!token) {
      this.props.history.push("/login");
    } else {
      const decodedJWT = JWT.verify(token, config.REACT_APP_JWT_SECRET);

      const options = {
        headers: {
          mcid: decodedJWT.mcid,
        },
      };

      // FETCH CLASSES AND SET STATE
      fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/classes`, options)
        .then((response) => response.json())
        .then((classList) =>
          this.setState({
            classList,
          })
        )
        .catch({ error: "there was an error" });
    }
  }

  render() {
    const options =
      this.state.reportSelect === "byclass" ? (
        <ReportOptionsByClass
          selectedClass={this.state.selectedClass}
          handleUpdate={this.handleUpdate}
          fetchRows={this.fetchRows}
          classList={this.state.classList}
        />
      ) : (
        ""
      );

    const report =
      this.state.selectedClass !== null ? (
        <ByClassReport rows={this.state.rows} />
      ) : (
        ""
      );

    return (
      <>
        <Header />
        <main className="full siteContent">
          <div className="container reportContainer">
            <ReportSelector
              handleUpdate={this.handleUpdate}
              reportSelect={this.state.reportSelect}
            />
            {options}
            {report}
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Reports;
