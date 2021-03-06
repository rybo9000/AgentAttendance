import React from "react";

import Class from "../Class/Class";

import "../config/style.css";
import "./EditClasses.css";

// EDIT CLASS COMPONENT
class EditClasses extends React.Component {
  static defaultProps = {
    classList: [],
  };

  render() {
    // ITERATE THROUGH THE ARRAY AND BUILD THE CLASS LIST TO POPULATE THE GUI
    const classes = this.props.classList.map((theClassName, index) => {
      const bgColor =
        index % 2 === 0 ? "whiteBackground" : "lightGrayBackground";

      const link = `/checkin/${theClassName.id}`;

      return (
        <Class
          theClassName={theClassName.classname}
          key={index}
          bgColor={bgColor}
          id={theClassName.id}
          link={link}
        />
      );
    });

    return (
      <section className="half" id="editClasses">
        <div className="halfTop darkBackground twoRem">Current Classes</div>
        {classes}
        <div className="halfBottom darkBackground"></div>
      </section>
    );
  }
}

export default EditClasses;
