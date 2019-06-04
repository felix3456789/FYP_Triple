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

class TourDetailPage extends Component {
  state = {
    bookmarked: false,
    rating: 4.5,
    originalPrice: null,
    salesPrice: 1200,
    commentCount: 3,
    likeCount: 4,
    liked: false
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
    const originalPrice = this.state.originalPrice;
    const salesPrice = this.state.salesPrice;

    if (originalPrice == null) {
      return (
        <span className="right color fontSize36 salesPricePosition">
          <span className="fontSize30">HKD </span> {salesPrice}+
        </span>
      );
    } else {
      return (
        <div>
          <div className="right red-text salesPricePosition fontSize36">
            <span class="fontSize30">HKD</span>
            {salesPrice}+
          </div>
          <strike className="right color fontSize30 originalPricePosition">
            HK{originalPrice}+
          </strike>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="marginBottom">
          <NavBar
            color="grey lighten-5 loginNav__textColor"
            textColor="loginNav--ul"
          />
        </div>
        <img src="./image/845.jpg" className="bgSize" />
        <div className="container">
          <div class="row">
            <div class="col s12">
              <div class="card-panel">
                <a
                  onClick={this.bookmarkOnClick}
                  className="color right fontSize bookmarkPosition"
                >
                  <Icon>{this.icon()}</Icon>
                </a>
                <div className="row">
                  <div className="col s3">
                    <img
                      className="photoSize photoPosition"
                      src="./image/845.jpg"
                    />
                  </div>
                  <div className="col s5">
                    <div className="tourName">
                      春の戀花
                      <span className="starPosition">
                        <StarRate rating={this.state.rating} />
                      </span>
                    </div>
                    <div className="basicDes">
                      中山、澳門 新春加班 2天直航團
                    </div>
                    <div className="tagPosition">
                      <span className="chip tagSize">澳門</span>
                      <span className="chip tagSize">吃、喝、玩、樂</span>
                      <span className="chip tagSize">中山</span>
                      <span className="chip tagSize">打卡勝地</span>
                      <span className="chip tagSize">賞櫻花</span>
                    </div>
                  </div>
                  <div className="col s4">
                    <div className="row">
                      <div className="col s12">{this.printPrice()}</div>
                      <div className="col s12 fontSize20 right color iconPosition">
                        <LikeButton
                          likeCount={this.state.likeCount}
                          liked={this.state.liked}
                        />
                        <a class="color paddingLeft15">
                          <CommentButton
                            commentCount={this.state.commentCount}
                          />
                        </a>
                      </div>
                      <div className="btnPosition">
                        <div>
                          <a className="btn btnColorBlue ">立即報團</a>
                        </div>
                        <div>
                          <a className="btn color btnColorWhite btnBottom">
                            即時查詢
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comment">
                  <div className="fontSize36 paddingBottom25 color">評論</div>
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default TourDetailPage;
