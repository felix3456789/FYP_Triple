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
    photoNum: 1
  };
  getTour = async () => {
    const tour = await TourServices.getTourById("AJHMP05N");
    this.setState({ tour: tour[0] });
    this.setState({ photoArr: tour.image });
    console.log("tour", this.state.tour);
  };

  componentDidMount = async () => {
    await this.getTour();

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);

    console.log(this.state.isLoading);
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

  // photo() {
  //   let image = this.state.tour.image;
  //   for (let i = 0; i < image.length; i++) {
  //     if (image[i + 1] != null) {
  //       this.setState({ photoNum: i });
  //     } else {
  //       this.setState({ photoNum: 0 });
  //       i = 0;
  //     }
  //     setTimeout(1000);
  //   }
  // }

  render() {
    const { tour } = this.state;
    console.log("test", tour);

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
                      {/* <img
                        className="tourIntro__img"
                        src={tour.image ? tour.image[1] : ""}
                      /> */}
                      <PhotoSlider tourContent={tour} />
                    </div>

                    <div className="tourIntro col s12 m12 l6">
                      <span className="tourIntro__title color">
                        {this.state.tour.title}
                      </span>
                      <div className="clearfix">
                        <StarRate />
                      </div>
                    </div>
                    <div className="col s12 m12 l3 tourIntro">
                      <div className="tourIntro__row">{this.printPrice()}</div>
                      <br />
                      <div className="tourIntro__row clearfix">
                        <LikeButton likeCount={this.state.likeCount} />
                        <CommentButton commentCount={this.state.commentCount} />
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

                  <div className="marginBottom20 marginTop20 color fontSize--27 ">
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
          <ProductBlock img="/image/845.jpg" title="日本東京三日兩夜賞櫻團" />
          <ProductBlock img="/image/Travel.jpg" title="新加坡三日兩夜美食團" />
          <ProductBlock img="/image/Travel3.jpg" title="韓國短線團" />
          <ProductBlock img="/image/Travel3.jpg" title="韓國短線團" />
          <ProductBlock img="/image/Travel3.jpg" title="韓國短線團" />
          <a className="right black-text paddingTop15 fontSize20">更多 ></a>
        </div>
      </React.Fragment>
    );
  }
}

export default TourDetailPage;
