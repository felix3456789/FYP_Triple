import React, { Component } from "react";
import Nav from "../components/common/nav/nav";
import Enquiry from "../components/homePage/enquiry/enquiry";
import Feature from "../components/homePage/featuresCard/featureCard";
import Slider from "../components/mainPage/slider/slider";
import ProductBlock from "../components/common/productBlock/productBlock";

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
        <div className="container">
          <Slider />
          <ProductBlock img="/image/845.jpg" title="日本東京三日兩夜賞櫻團" />
          <ProductBlock img="/image/Travel.jpg" title="新加坡三日兩夜美食團" />
          <ProductBlock img="/image/Travel3.jpg" title="韓國短線團" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
