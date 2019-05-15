import React, { Component } from "react";
import Nav from "../components/common/nav/nav";
import Enquiry from "../components/homePage/enquiry/enquiry";
class Home extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    document.getElementsByClassName("enquiry__layout")[0].style.opacity =
      1 - window.pageYOffset / 1000;
  }

  render() {
    return (
      <React.Fragment>
        <Nav id="homeNav" color=" loginNav__textColor" />
        <div className="enquiry__layout">
          <Enquiry />
        </div>
        <div className="home__photoSlider">
          <h1>HIHIHIHIHIHjfdlaflkasjlk</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
