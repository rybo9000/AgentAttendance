import React from "react";
import moment from "moment";

import "../config/style.css";
import "./ByClassReport.css";

// REPORT BY CLASS
class ByClassReport extends React.Component {
  static defaultProps = {
    rows: [],
  };

  render() {
    // GENERATE THE TABLE ROWS WITH DATA
    const rows = this.props.rows.map((row, index) => (
      <>
        <tr key={index}>
          <td>{row.firstname + " " + row.lastname}</td>
          <td>COMPLETED</td>
          <td>{moment.utc(row.completed).format("MM-DD-YYYY")}</td>
        </tr>
      </>
    ));

    return (
      <table className="reportTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ByClassReport;
