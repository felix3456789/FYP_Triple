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
    if (await authService.getJwt()) {
      this.setState({ isLogin: true });
    }

    window.addEventListener("scroll", this.handleScroll);
    console.log(this.state.isLogin);
    let features = [];
    if (this.state.isLogin) {
      let recommendTag = await tourService.getRecommendTag();
      await this.setState({ tags: recommendTag.recommendTags });
      features = await tourService.getFeatureTour(5);
    } else {
      features = await tourService.getFeatureTour(20);
    }
    await this.setState({ features });
    console.log(features);

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
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
        <Nav position="absolute" id="homeNav" color=" loginNav__textColor" />
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
              <PbSection tag={tags[4]} />
            </React.Fragment>
          ) : null}
        </div>

        <div className="youMayAlsoLike">
          <div className="fontSize36 paddingBottom25">你可能喜歡</div>
          {features
            ? features.map(feature => (
                <ProductBlock
                  id={feature.tourID}
                  img={feature.image[1]}
                  title={feature.title}
                />
              ))
            : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
