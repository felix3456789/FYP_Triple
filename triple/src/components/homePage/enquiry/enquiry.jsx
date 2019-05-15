import React, { Component } from "react";
import EnquiryCard from "./enquiryCard";

import "../../../css/home.css";
class Enquiry extends Component {
  state = {
    data: {
      enquiry: ""
    }
  };
  render() {
    return (
      <React.Fragment>
        <video className="home__background" id="myVideo" autoPlay loop>
          <source src="/bgVideo3.mp4" type="video/mp4" />
        </video>
        <EnquiryCard />
      </React.Fragment>
    );
  }
}

export default Enquiry;
