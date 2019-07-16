import React, { Component } from "react";
import "../../css/purchase.css";

class PurchasePop extends Component {
  state = {
    index: 0,
    adult: 1,
    baby: 0,
    child: 0,
    childBed: 0,
    totalPrice: 0
  };

  calPrice = async () => {
    const { index, adult, baby, child, childBed } = this.state;
    const totalPrice =
      adult * this.props.price[index].adultPrice +
      baby * this.props.price[index].babyPrice +
      child * this.props.price[index].childPrice +
      childBed * this.props.price[index].childHalfRoomPrice;
    await this.setState({ totalPrice: totalPrice });
  };

  handleOnClick = async e => {
    const value = e.currentTarget.value;
    await this.setState({ index: value });
    this.calPrice();
  };

  handleChildHalfRoomPrice = async e => {
    const value = e.currentTarget.value;
    await this.setState({ childBed: value });
    this.calPrice();
  };
  handleChildPrice = async e => {
    const value = e.currentTarget.value;
    await this.setState({ child: value });
    this.calPrice();
  };
  handleBabyPrice = async e => {
    const value = e.currentTarget.value;
    await this.setState({ baby: value });
    this.calPrice();
  };
  handleAdultPrice = async e => {
    const value = e.currentTarget.value;
    await this.setState({ adult: value });
    this.calPrice();
  };

  printDate = () => {
    const { price } = this.props;
    let date = [];
    let content = [];
    for (var i = 0; i < price.length; i++) {
      date.push(this.date(price[i].departureDate));
      content.push(
        <p>
          <label className="text--blue">
            <input
              className="with-gap btn--radio"
              name="group3"
              type="radio"
              value={i}
              onClick={this.handleOnClick}
            />
            <span>{date[i]}</span>
          </label>
        </p>
      );
    }
    return content;
  };

  date(day) {
    const departDate = day;
    const newDate = new Date(departDate);
    const year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let date = newDate.getDate();
    let weekday = newDate.getDay();
    const week = ["日", "一", "二", "三", "四", "五", "六"];
    if (date < 10) {
      date = "0" + date;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return year + " - " + month + " - " + date + " (" + week[weekday] + ")";
  }
  valueDate(day) {
    const departDate = day;
    const newDate = new Date(departDate);
    const year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let date = newDate.getDate();
    if (date < 10) {
      date = "0" + date;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return year + "-" + month + "-" + date;
  }

  componentDidMount = async () => {
    await this.calPrice();
  };

  render() {
    return (
      <div className="popUp">
        <div className="popUp-background">
          <div className="popUp--container">
            <div className="row">
              <div className="col s6">
                <h4 className="text--blue">請選擇出發日期</h4>
                <div className="tour--scroll">{this.printDate()}</div>
              </div>
              <div className="col s6">
                <h4 className="text--blue">報團人數:</h4>
                <div className="row">
                  <div className="col s5 infoText">成人</div>
                  <div className="col s3">
                    <input
                      id="adultPrice"
                      type="number"
                      className="validate text-center"
                      min="0"
                      value={this.state.adult}
                      onChange={this.handleAdultPrice}
                    />
                  </div>
                  <div className="col s4 infoText">
                    {this.state.index
                      ? "x HKD " + this.props.price[this.state.index].adultPrice
                      : "x HKD " + this.props.price[0].adultPrice}
                  </div>
                </div>

                <div className="row">
                  <div className="col s5 infoText">兒童2 - 11 歲(佔床)</div>
                  <div className="col s3">
                    <input
                      id="childHalfRoomPrice"
                      type="number"
                      className="validate text-center"
                      min="0"
                      value={this.state.childBed}
                      onChange={this.handleChildHalfRoomPrice}
                    />
                  </div>
                  <div className="col s4 infoText">
                    {this.state.index
                      ? "x HKD " +
                        this.props.price[this.state.index].childHalfRoomPrice
                      : "x HKD " + this.props.price[0].childHalfRoomPrice}
                  </div>
                </div>

                <div className="row">
                  <div className="col s5 infoText">兒童2 - 11 歲(不佔床)</div>
                  <div className="col s3">
                    <input
                      id="childPrice"
                      type="number"
                      className="validate text-center"
                      min="0"
                      value={this.state.child}
                      onChange={this.handleChildPrice}
                    />
                  </div>
                  <div className="col s4 infoText">
                    {this.state.index
                      ? "x HKD " + this.props.price[this.state.index].childPrice
                      : "x HKD " + this.props.price[0].childPrice}
                  </div>
                </div>

                <div className="row">
                  <div className="col s5 infoText">嬰兒(不佔床)</div>
                  <div className="col s3">
                    <input
                      id="babyPrice"
                      type="number"
                      className="validate text-center"
                      min={0}
                      value={this.state.baby}
                      onChange={this.handleBabyPrice}
                    />
                  </div>
                  <div className="col s4 infoText">
                    {this.state.index
                      ? "x HKD " + this.props.price[this.state.index].babyPrice
                      : "x HKD " + this.props.price[0].babyPrice}
                  </div>
                </div>

                <div className="row">
                  <div className="col s5 offset-s7 infoText">
                    合共: HKD {this.state.totalPrice}
                  </div>
                </div>
              </div>

              <div className="col s12">
                <div className="btn--center">
                  <a
                    className="popUp--btn btn--white"
                    onClick={this.props.closePopup}
                  >
                    取消
                  </a>
                  <a className="popUp--btn btn--blue">下一步</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PurchasePop;
