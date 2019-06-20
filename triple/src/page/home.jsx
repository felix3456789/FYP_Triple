import React, { Component } from "react";
import Nav from "../components/common/nav/nav";
import Enquiry from "../components/homePage/enquiry/enquiry";
import Feature from "../components/homePage/featuresCard/featureCard";
import Slider from "../components/mainPage/slider/slider";
import ProductBlock from "../components/common/productBlock/productBlock";
import PbSection from "../components/mainPage/productBlockSection/pbSection";
import tourService from "../services/tourServices";
import AuthServices from "../services/authServices";
import LoadingScreen from "../components/loading/loadingScreen";
import authService from "../services/authServices";
import "../css/loadingBg.css";

class Home extends Component {
  state = {
    tags: [],
    isLoading: true,
    isLogin: false,
    features: []
  };
  async componentDidMount() {
    if (authService.getJwt()) {
      this.setState({ isLogin: true });
    }

    window.addEventListener("scroll", this.handleScroll);
    if (this.state.isLogin) {
      let recommendTag = await tourService.getRecommendTag();
      await this.setState({ tags: recommendTag.recommendTags });
    } else {
      let features = await tourService.getFeatureTour();
      await this.setState({ features });
    }

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
    window.addEventListener("scroll", this.handleScroll);
    console.log("get", AuthServices.getJwt());
    if (AuthServices.getJwt()) {
      let recommendTag = await tourService.getRecommendTag();
      console.log(recommendTag);
      await this.setState({ tags: recommendTag.recommendTags });
      console.log("tags", this.state.tags);
    } else {
    }
  }
  loading() {
    const { isLoading } = this.state;
    if (isLoading == true) {
      return <LoadingScreen />;
    }
  }
  handleScroll(e) {
    document.getElementsByClassName("enquiry__layout")[0].style.opacity =
      1 - window.pageYOffset / 1000;
  }

  render() {
    const { tags } = this.state;
    const { features } = this.state;
    console.log("tags1231231", tags[0]);
    return (
      <React.Fragment>
        <div className={this.state.isLoading ? "loadingBg1" : "loadingBg0"}>
          {this.loading()}
        </div>
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
        <div className="youMayAlsoLike">
          <div className="fontSize36 paddingBottom25">你可能喜歡</div>
          {features
            ? features.map(feature => (
                <a href={feature.tourID}>
                  <ProductBlock img={feature.image[1]} title={feature.title} />{" "}
                </a>
              ))
            : null}

          <a className="right black-text paddingTop15 fontSize20">更多 ></a>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
