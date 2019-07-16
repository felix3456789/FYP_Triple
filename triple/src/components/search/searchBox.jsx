import React, { Component } from "react";
import "../../css/card.css";
import tourService from "../../services/tourServices";
import authService from "../../services/authServices";
import userServices from "../../services/userServices";
import StarRate from "../commentBox/star";
import CommentButton from "../commentBtn/commentBtn";
import LikeButton from "../likeButton/likeButton";
import { Icon } from "@material-ui/core";
import { isTaggedTemplateExpression } from "@babel/types";

class SearchBox extends Component {
  state = {
    bookmarked: false
  };

  componentDidMount = async () => {
    if (authService.getJwt()) {
      this.checkBookmark();
    }
  };

  handleClick = async () => {
    if (authService.getJwt())
      await tourService.insertHistory(this.props.items.tourID);
    window.location = "/tour-detail/" + this.props.items.tourID;
  };

  clickComment = async () => {
    if (authService.getJwt())
      await tourService.insertHistory(this.props.items.tourID);
    window.location = "/tour-detail/" + this.props.items.tourID + "#comment";
  };

  // handleCompare = async id => {
  //   tourService.editCompareList(id);
  // };

  icon() {
    return this.state.bookmarked ? "bookmark" : "bookmark_border";
  }

  printPrice() {
    const { items } = this.props;
    if (items.salesPrice != null) {
      return (
        <div className="textRight">
          <div className="red-text fontSize--30">
            <span className="fontSize--26">HK </span>
            {items.salesPrice}+
          </div>
          <div>
            <strike className="fontSize--26">HK {items.originalPrice}+</strike>
          </div>
        </div>
      );
    } else {
      return (
        <div className="fontSize--30 textRight">HK {items.originalPrice}+</div>
      );
    }
  }

  checked = () => {
    const checkList = this.props.compareChips;
    const { items } = this.props;
    let flag = false;
    if (checkList.length != 0) {
      for (var i = 0; i < checkList.length; i++) {
        if (checkList[i].id == items.tourID) {
          flag = true;
        }
      }
    }
    return flag;
  };
  checkBookmark = async () => {
    const bookmarkedList = await userServices.getBookmark();
    if (bookmarkedList.find(item => this.props.items.tourID == item)) {
      await this.setState({ bookmarked: true });
    }
  };
  handleBookmark = async id => {
    if (authService.getJwt()) {
      if (this.state.bookmarked == true) {
        await this.setState({ bookmarked: false });
      } else {
        await this.setState({ bookmarked: true });
      }
      userServices.bookmark(id);
    } else {
      alert("請先登入!");
    }
  };

  render() {
    const { items, likeInfo, liked, onLike } = this.props;
    console.log(liked);
    return (
      <div>
        <div className="marginButtonZero row">
          <div className="col s12">
            <div className="card-panel panelPadding bgColor">
              <div className="marginButtonZero row">
                <div className="col s4">
                  <img
                    className=" pointerCursor imgStyle"
                    src={items.title ? items.image[0] : ""}
                    onClick={() => this.handleClick()}
                  />
                </div>
                <div className="col s8">
                  <div className="row">
                    <div className="col s8 fontSize18 color">
                      <div
                        onClick={() => this.handleClick()}
                        className="pointerCursor truncate"
                      >
                        {items.title}
                      </div>
                      <div className="star">
                        <StarRate rating={items.rating} />
                      </div>
                    </div>
                    <div className="col s3 right">
                      <a
                        onClick={() => this.handleBookmark(items.tourID)}
                        className="color right fontSize zIndex"
                      >
                        <Icon>{this.icon()}</Icon>
                      </a>
                      <form>
                        <label className="right color compareBtn ">
                          <input
                            type="checkbox"
                            checked={this.checked() ? "checked" : ""}
                            class="filled-in checkbox-compare"
                            onChange={() =>
                              this.props.compare(items.tourID, items.title)
                            }
                          />
                          <span>加入比較</span>
                        </label>
                      </form>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      {items.tags
                        ? items.tags.map(tag =>
                            tag.title == "" ? null : tag.title.length < 30 ? (
                              <div className="chip fontSize12">{tag.title}</div>
                            ) : null
                          )
                        : null}
                    </div>
                  </div>
                  <div className="row position--relative">
                    <div className="col s3 position--absolute bottom--0 pointerCursor">
                      <LikeButton
                        liked={liked[0] ? liked[0].liked : null}
                        count={liked[0] ? liked[0].totalLike : null}
                        onLike={() => onLike(items.tourID)}
                      />
                      <a
                        onClick={() => this.clickComment()}
                        class="color fontSize14 paddingLeft--10px"
                      >
                        <CommentButton
                          commentCount={
                            items.commentCount ? items.commentCount : 0
                          }
                        />
                      </a>
                    </div>

                    <div className="col s4 offset-s8">{this.printPrice()}</div>
                  </div>
                </div>

                {/* <div className="col s10 m7 l9">
                  <div className="row marginButtonZero">
                    <span className="col s9 fontPositon---21 fontSize18 color">
                      <span
                        onClick={() => this.handleClick()}
                        className="pointerCursor"
                      >
                        {items.title}
                      </span>
                      <span className="star">
                        <StarRate rating={this.state.rating} />
                      </span>
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
                    <span className="col s4 color fontSize14 post">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
