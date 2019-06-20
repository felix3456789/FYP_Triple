import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Icon } from "@material-ui/core";
import NavBar from "../components/common/nav/nav";
import PhotoSlider from "../components/mainPage/photoSlider/photoSlider";
import "../css/style.css";
import "../css/tourDetailPage.css";
import CommentButton from "../components/commentBtn/commentBtn";
import LikeButton from "../components/likeButton/likeButton";
import StarRate from "../components/commentBox/star";
import ProductBlock from "../components/common/productBlock/productBlock";
import CommentBox from "../components/commentBox/comment";
import TextComment from "../components/commentBox/textComment";
import TourServices from "../services/tourServices";
import DetailTabs from "../components/detailTabs/detailTabs";
import LoadingScreen from "../components/loading/loadingScreen";

class TourDetailPage extends Component {
  state = {
    isLogin: false,
    bookmarked: false,
    rating: 4.5,
    commentCount: 3,
    likeCount: 4,
    liked: false,
    tour: {},
    isLoading: true,
    photoArr: [],
    photoNum: 1,
    features: []
  };

  getTour = async id => {
    const tour = await TourServices.getTourById(id);
    this.setState({ tour: tour[0] });
    this.setState({ photoArr: tour[0].image });

    console.log("tour", this.state.tour);
    console.log("photo", this.state.photoArr);
  };

  getFeaturesTour = async () => {
    const features = await TourServices.getFeatureTour(5);

    this.setState({ features: features });
    console.log(features);
  };

  componentDidMount = async () => {
    const { match: params } = this.props;
    await this.getTour(params.params.id);

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);

    console.log(this.state.isLoading);
    await this.getFeaturesTour();
  };

  loading() {
    const { isLoading } = this.state;
    if (isLoading == true) {
      return <LoadingScreen />;
    }
  }

  icon() {
    return this.state.bookmarked ? "bookmark" : "bookmark_border";
  }
  bookmark() {
    this.setState({ bookmarked: true });
  }
  cancelBookmark() {
    this.setState({ bookmarked: false });
  }
  bookmarkOnClick = () => {
    this.state.bookmarked ? this.cancelBookmark() : this.bookmark();
  };

  printPrice() {
    const originalPrice = this.state.tour.originalPrice;
    const salesPrice = this.state.tour.salesPrice;

    if (salesPrice == null) {
      return (
        <span className="right color fontSize36 salesPricePosition">
          <span className="fontSize30">HKD </span> {originalPrice}+
        </span>
      );
    } else {
      return (
        <React.Fragment>
          <span className="tourIntro__item fontSize--32 red-text">
            <span className="fontSize--26">HKD </span>
            {salesPrice}+
          </span>
          <strike className="tourIntro__item fontSize--27 color">
            HKD {originalPrice}+
          </strike>
        </React.Fragment>
      );
    }
  }

  render() {
    const { tour } = this.state;
    const { features } = this.state;
    console.log("test", tour);
    console.log("test2: ", features);

    return (
      <React.Fragment>
        <div className={this.state.isLoading ? "loadingBg1" : "loadingBg0"}>
          {this.loading()}
        </div>
        <div className="marginBottom">
          <NavBar
            color="grey lighten-5 loginNav__textColor"
            textColor="loginNav--ul"
          />
        </div>
        <div>
          <img
            className="bgSize bgBlur"
            src={tour.image ? tour.image[0] : ""}
          />
          <div className="container paddingBottom25 paddingTop110">
            <div className="row">
              <div className="col s12">
                <div className="card-panel">
                  <a
                    onClick={this.bookmarkOnClick}
                    className="color right fontSize bookmarkPosition"
                  >
                    <Icon>{this.icon()}</Icon>
                  </a>
                  <div className="row">
                    <div className="col s12 m12 l3">
                      <PhotoSlider tourContent={tour} />
                    </div>
                    <div className="tourIntro col s12 m12 l6">
                      <span className="tourIntro__title color">
                        {this.state.tour.title}
                      </span>
                      <div className="clearfix">
                        <StarRate />
                      </div>
                      <br />
                      <div>
                        {tour.tags
                          ? tour.tags.map(tag =>
                              tag.title == "" ? null : tag.title.length < 30 ? (
                                <div className="chip">{tag.title}</div>
                              ) : null
                            )
                          : null}
                      </div>
                    </div>
                    <div className="col s12 m12 l3 tourIntro">
                      <div className="tourIntro__row">{this.printPrice()}</div>
                      <br />
                      <div className="tourIntro__row clearfix">
                        <LikeButton likeCount={this.state.likeCount} />
                        <a href="#comment">
                          <CommentButton
                            commentCount={this.state.commentCount}
                          />
                        </a>
                      </div>
                      <div className="tourIntro__row">
                        <a className=" tourIntro__btn background--blue white-text">
                          立即報團
                        </a>
                        <a className=" tourIntro__btn background--white color">
                          即時查詢
                        </a>
                      </div>
                    </div>
                  </div>

                  <DetailTabs pdf={tour.detail} tourContent={tour} />

                  <div
                    id="comment"
                    className="marginBottom20 marginTop20 color fontSize--27 "
                  >
                    評論
                  </div>
                  <TextComment />
                  <br />
                  <CommentBox />
                  <CommentBox />
                </div>
              </div>
            </div>
          </div>
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

export default TourDetailPage;
