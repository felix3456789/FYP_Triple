import React, { Component } from "react";
import "../../css/card.css";
import StarRate from "../commentBox/star";
import { Icon } from "@material-ui/core";

class SearchBox extends Component {
  state = {
    tourName: "春の戀花",
    tourValid: false,
    bookmarked: false,
    rating: 4.5,
    basicDes: "中山、澳門 新春加班 2天直航團"
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
                className="color right fontSize"
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
                    <span className="col s12 fontPositon fontSize18 color">
                      {this.state.tourName}
                      {this.printTourValid()}
                      <StarRate
                        className="starPosition"
                        rating={this.state.rating}
                      />
                    </span>
                    <span className="col s12 fontPositon color fontSize14 ">
                      {this.state.basicDes}
                    </span>
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
