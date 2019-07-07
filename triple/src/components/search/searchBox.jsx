import React, { Component } from "react";
import "../../css/card.css";
import StarRate from "../commentBox/star";
import CommentButton from "../commentBtn/commentBtn";
import LikeButton from "../likeButton/likeButton";

import { Icon } from "@material-ui/core";

class SearchBox extends Component {
  state = {
    tourName: "春の戀花",
    tourValid: false,
    bookmarked: false,
    rating: 4.5,
    basicDes: "中山、澳門 新春加班 2天直航團",
    commentCount: 3,
    likeCount: 4,
    liked: false,
    originalPrice: 0,

    salePrice: 699
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
    const salePrice = this.state.salePrice;
    const { items } = this.props;
    if (salePrice != null) {
      return (
        <span className="col s4 fontSize36 color right-align right pricePosition2">
          <span className="red-text salePricePosition">
            <span className="fontSize30">HK</span>
            {items.salesPrice}+
          </span>
          <div>
            <strike className="fontSize30">HK{items.originalPrice}+</strike>
          </div>
        </span>
      );
    } else {
      return (
        <span className="col s4 fontSize36 color right-align right pricePosition">
          <span className="fontSize30">HK</span>
          {items.originalPrice}+
        </span>
      );
    }
  }

  render() {
    const { items } = this.props;
    return (
      <React.Fragment>
        <div className="marginButtonZero row">
          <div className="col s12">
            <div className="card-panel panelPadding bgColor">
              <a
                onClick={this.bookmarkOnClick}
                className="color right fontSize zIndex"
              >
                <Icon>{this.icon()}</Icon>
              </a>
              <div className="marginButtonZero row">
                <div className="col s12 m5 l3">
                  <img
                    className="responsive-img marginTop10 radius5px top---2"
                    src="./image/845.jpg"
                  />
                </div>
                <div className="col s12 m7 l9">
                  <div className="row marginButtonZero">
                    <span className="col s11 fontPositon---21 fontSize18 color width60">
                      {/*{this.state.tourName}*/}
                      {items.title}
                      <span className="star">
                        <StarRate rating={this.state.rating} />
                      </span>
                    </span>
                    <span className="col s12 fontPositon---21 color fontSize14 ">
                      {this.state.basicDes}
                    </span>
                    <div className="col s9 fontPositon---13">
                      {items.tags
                        ? items.tags.map(tag =>
                            tag.title == "" ? null : tag.title.length < 30 ? (
                              <div className="chip fontSize12">{tag.title}</div>
                            ) : null
                          )
                        : null}
                    </div>
                    <span className="col s4 color fontSize14">
                      <LikeButton
                        likeCount={this.state.likeCount}
                        liked={this.state.liked}
                      />
                      <a class="color fontSize14 paddingLeft--10px">
                        <CommentButton commentCount={this.state.commentCount} />
                      </a>
                    </span>
                    {this.printPrice()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBox;
