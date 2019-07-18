import React, { Component } from "react";
import "../../css/card.css";
import { Icon } from "@material-ui/core";

class userCard extends Component {
  state = {
    tourName: "春の戀花",
    tourValid: false,
    bookmarked: false,
    basicDes: "中山、澳門 新春加班 2天直航團",
    departDate: {
      _start: "2019/02/08",
      get start() {
        return this._start;
      },
      set start(value) {
        this._start = value;
      },
      _end: "2019/02/09",
      get end() {
        return this._end;
      },
      set end(value) {
        this._end = value;
      }
    },
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

  printTourValid() {
    const valid = this.state.tourValid;
    let text = "";
    if (!valid) {
      text += " (未成團)";
    } else {
      text += " (已成團)";
    }
    return text;
  }

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

  printDepartDate() {
    const start = this.state.departDate.start;
    const end = this.state.departDate.end;
    let text = "";
    text += start + " - " + end;
    return text;
  }
  checkPayment() {
    const payment = this.state.payment;
    let text = "";
    text += payment ? "已付款" : "代付款";
    if (payment) {
      return <span className="col s12">{text}</span>;
    } else {
      return (
        <span className="col s12">
          <a href="/test">
            <u className="red-text">{text}</u>
          </a>
        </span>
      );
    }
  }

  goTourPage = () => {
    const { info } = this.props;
    window.location = "/tour-detail/" + info.tourID;
  };

  render() {
    const { info } = this.props;
    console.log("INFO", info);
    return (
      <React.Fragment>
        <div className="marginButtonZero row">
          <div className="col s12 ">
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
                    className="responsive-img marginTop10 radius5px pointerCursor"
                    src={info.img}
                    onClick={this.goTourPage}
                  />
                </div>
                <div className="col s11 m7 l9">
                  <div className="row marginButtonZero">
                    <span
                      className="col s12 fontPositon---21 fontSize18 color width60 pointerCursor"
                      onClick={this.goTourPage}
                    >
                      {info.title}
                    </span>

                    <div className="col s5 color paddingleftZero">
                      <span className="row">
                        <span className="col s12">出發日子: </span>
                        <span className="col s12">{info.depDate}</span>
                      </span>
                    </div>
                    <div className="col s4 color paddingleftZero">
                      <span className="row">
                        <span className="col s12">報團人數: </span>
                        <span className="col s12">{info.totalNum}人</span>
                      </span>
                    </div>
                    <div className="col s3 color paddingleftZero">
                      <span className="row">
                        <span className="col s12">付款情況: </span>
                        <span className="col s12">${info.totalPrice}</span>
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
