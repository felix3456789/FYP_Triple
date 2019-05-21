import React, { Component } from "react";
import "../../css/card.css";
import { Icon } from "@material-ui/core";

class userCard extends Component {
  state = {
    tourName: "春の戀花 (未成團)",
    tourValid: false,
    bookmarked: false,
    basicDes: "中山、澳門 新春加班 2天直航團",
    departDate: "2019/02/08 - 2019/02/09",
    custNum: {
      _adult: 2,
      get adult() {
        return this._adult;
      },
      set adult(value) {
        this._adult = value;
      },
      _child: 0,
      get child() {
        return this._child;
      },
      set child(value) {
        this._child = value;
      },
      _childWithoutBed: 0,
      get childWithoutBed() {
        return this._childWithoutBed;
      },
      set childWithoutBed(value) {
        this._childWithoutBed = value;
      },
      _baby: 0,
      get baby() {
        return this._baby;
      },
      set baby(value) {
        this._baby = value;
      }
    },
    payment: false
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
  printAdultNum() {
    const adult = this.state.custNum.adult;
    let text = "";

    if (adult != 0) {
      text += adult;
      text += " 成人";
    }
    return text;
  }
  printChildNum() {
    const child = this.state.custNum.child;
    let text = "";
    if (child != 0) {
      text += child;
      text += " 兒童2 - 11 歲(佔床)";
    }
    return text;
  }
  printChildWithoutBedNum() {
    const childWithoutBed = this.state.custNum.childWithoutBed;
    let text = "";
    if (childWithoutBed != 0) {
      text += childWithoutBed;
      text += " 兒童2 - 11 歲(不佔床)";
    }
    return text;
  }
  printBabyNum() {
    const baby = this.state.custNum.baby;
    let text = "";
    if (baby != 0) {
      text += baby;
      text += " 嬰兒(不佔床)";
    }
    return text;
  }

  render() {
    return (
      <React.Fragment>
        <div className="marginButtonZero row">
          <div className="col s12 m10 l8">
            <div className="card-panel panelPadding">
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
                    </span>
                    <span className="col s12 fontPositon color fontSize14 ">
                      {this.state.basicDes}
                    </span>
                    <div className="col s5 color paddingleftZero">
                      <span className="row">
                        <span className="col s12">出發日子: </span>
                        <span className="col s12">{this.state.departDate}</span>
                      </span>
                    </div>
                    <div className="col s4 color paddingleftZero">
                      <span className="row">
                        <span className="col s12">報團人數: </span>
                        <span className="col s12">{this.printAdultNum()}</span>
                        <span className="col s12">{this.printChildNum()}</span>
                        <span className="col s12">
                          {this.printChildWithoutBedNum()}
                        </span>
                        <span className="col s12">{this.printBabyNum()}</span>
                      </span>
                    </div>
                    <div className="col s3 color paddingleftZero">
                      <span className="row">
                        <span className="col s12">付款情況: </span>
                        <span className="col s12">已付款</span>
                      </span>
                    </div>
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

export default userCard;
