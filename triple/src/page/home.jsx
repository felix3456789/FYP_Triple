import React, { Component } from "react";
import Nav from "../components/common/nav/nav";
import Enquiry from "../components/homePage/enquiry/enquiry";
import Feature from "../components/homePage/featuresCard/featureCard";
import Slider from "../components/mainPage/slider/slider";
import ProductBlock from "../components/common/productBlock/productBlock";
import PbSection from "../components/mainPage/productBlockSection/pbSection";
import tourService from "../services/tourServices";

class Home extends Component {
  state = {
    tags: []
  };
  async componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    let recommendTag = await tourService.getRecommendTag();
    console.log(recommendTag);
    await this.setState({ tags: recommendTag.recommendTags });
    console.log("tags", this.state.tags);
  }

  handleScroll(e) {
    document.getElementsByClassName("enquiry__layout")[0].style.opacity =
      1 - window.pageYOffset / 1000;
  }

  render() {
    const { tags } = this.state;
    console.log("tags1231231", tags[0]);
    return (
      <React.Fragment>
        <Nav id="homeNav" color=" loginNav__textColor" />
        <div className="enquiry__layout">
          <Enquiry />
        </div>
        <div className="container homePage">
          <Slider />
          {tags[0] ? (
            <React.Fragment>
              <PbSection tag={tags[0]} />
              <PbSection tag={tags[1]} />
              <PbSection tag={tags[2]} />
            </React.Fragment>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
