import React from "react";

import "../config/style.css";
import "./ReportOptionsByClass.css";

class ReportOptionsByClass extends React.Component {
  render() {
    const classList = this.props.classList.map(cls => {
      return (
        <option value={cls.id} key={cls.id}>
          {cls.classname}
        </option>
      );
    });

    return (
      <div className="reportOptionsSelector">
        <select
          value={this.props.selectedClass}
          onChange={e => {
            this.props.handleUpdate(e.target.name, e.target.value);
            this.props.fetchRows(e.target.value);
          }}
          name="selectedClass"
          id="selectedClass"
        >
          <option value="">Select A Class</option>
          {classList}
        </select>
      </div>
    );
  }
}

export default ReportOptionsByClass;
