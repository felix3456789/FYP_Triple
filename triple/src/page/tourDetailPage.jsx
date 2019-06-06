import React, { Component } from "react";
import { Icon } from "@material-ui/core";
import NavBar from "../components/common/nav/nav";
import "../css/style.css";
import "../css/tourDetailPage.css";
import CommentButton from "../components/commentBtn/commentBtn";
import LikeButton from "../components/likeButton/likeButton";
import StarRate from "../components/commentBox/star";
import ProductBlock from "../components/common/productBlock/productBlock";
import Footer from "../components/footer/footer";
import CommentBox from "../components/commentBox/comment";
import TextComment from "../components/commentBox/textComment";
import TourServices from "../services/tourServices";
import DetailTabs from "../components/detailTabs/detailTabs";
import starRatings from "react-star-ratings/build/star-ratings";

class TourDetailPage extends Component {
  state = {
    bookmarked: false,
    rating: 4.5,
    commentCount: 3,
    likeCount: 4,
    liked: false,
    tour: {}
  };
  getTour = async () => {
    const tour = await TourServices.getTourById("AJSGS05N");
    this.setState({ tour: tour[0] });
    console.log("tour", this.state.tour);
  };
  componentDidMount = async () => {
    await this.getTour();
  };

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
        <div>
          <span>HKD</span>
          {salesPrice}+<strike>HK{originalPrice}+</strike>
        </div>
      );
    }
  }

  render() {
    const { tour } = this.state;
    console.log("test", tour);
    return (
      <React.Fragment>
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
                    <div className="col s12 m3">
                      <img
                        className="tourIntro__img"
                        src={this.state.tour.image}
                      />
                    </div>
                    <div className="col s8 m5">
                      <span className="">{this.state.tour.title}</span>
                      <StarRate />
                    </div>
                    <div className="col s4 m3">
                      <div>{this.printPrice()}</div>
                      <LikeButton />
                      <CommentButton />
                      <a className="btn">立即報團</a>
                      <a className="btn">即時查詢</a>
                    </div>
                  </div>
                  {/* <div className=" color">
                    <div className="details padding20 fontSize36 white-text marginBottom20">
                      行程資料
                    </div>
                  </div> */}

                  <DetailTabs />

                  <div className="">
                    <div className="fontSize36 white-text  padding20 details marginBottom20 ">
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default TourDetailPage;
