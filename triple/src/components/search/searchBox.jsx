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

  printTourValid() {
    const valid = this.state.tourValid;
    let text = "";
    if (!valid) {
      text += " (未成團) ";
    } else {
      text += " (已成團) ";
    }
    return text;
  }

  render() {
    return (
      <React.Fragment>
        <div className="marginButtonZero row">
          <div className="col s12 m10 l8">
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
                    className="responsive-img marginTop10 radius5px"
                    src="./image/845.jpg"
                  />
                </div>
                <div className="col s12 m7 l9">
                  <div className="row marginButtonZero">
                    <span className="col s12 fontPositon fontSize18 color width60">
                      {this.state.tourName}
                      {this.printTourValid()}
                      <span className="starPosition paddingLeft--3px">
                        <StarRate rating={this.state.rating} />
                      </span>
                    </span>
                    <span className="col s12 fontPositon color fontSize14 ">
                      {this.state.basicDes}
                    </span>
                    <span className="col s4 color fontSize14">
                      <LikeButton
                        likeCount={this.state.likeCount}
                        liked={this.state.liked}
                      />
                      <a class="color fontSize14 paddingLeft--10px">
                        <CommentButton commentCount={this.state.commentCount} />
                      </a>
                    </span>
                    <span className="col s4 offset-s4" />
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
