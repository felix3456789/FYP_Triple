import React, { Component } from "react";
import "../../css/paymentPop.css";
import userService from "../../services/userServices";
import authService from "../../services/authServices";
import { async } from "q";
import { throwStatement } from "@babel/types";

class PaymentPop extends Component {
  state = {
    myInfo: [],
    data: {
      lastNameEng: "",
      firstNameEng: "",
      BOD: "",
      title: "",
      passportNum: "",
      passportDate: "",
      email: "",
      phoneNum: "",
      cardNumber: "",
      cardHolderName: "",
      emerContactName: "",
      relationship: "",
      emerEmail: "",
      emerPhoneNum: ""
    }
  };

  getMyInfo = async () => {
    if (authService.getJwt()) {
      var userInfo = await userService.getUserInfo();
      this.setState({ myInfo: userInfo });
    }
  };

  date(day) {
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

    return year + " - " + month + " - " + date;
  }

  componentDidMount = async () => {
    await this.getMyInfo();
    this.insertData();
  };

  insertData = () => {
    const info = this.state.myInfo;
    const data = { ...this.state.data };
    if (info.lastNameEng) data["lastNameEng"] = info.lastNameEng;
    if (info.firstNameEng) data["firstNameEng"] = info.firstNameEng;
    if (info.BOD) data["BOD"] = info.BOD;
    if (info.title) data["title"] = info.title;
    if (info.passportNum) data["passportNum"] = info.passportNum;
    if (info.passportDate) data["passportDate"] = info.passportDate;
    if (info.email) data["email"] = info.email;
    if (info.phoneNum) data["phoneNum"] = info.phoneNum;
    if (info.Payment && info.Payment.length > 0)
      data["cardNumber"] = info.Payment[0].cardNumber;
    if (info.Payment && info.Payment.length > 0)
      data["cardHolderName"] = info.Payment[0].cardHolderName;
    if (info.EmerContact && info.EmerContact.length > 0)
      data["emerContactName"] = info.EmerContact[0].emerContactName;

    if (info.EmerContact && info.EmerContact.length > 0)
      data["relationship"] = info.EmerContact[0].relationship;

    if (info.EmerContact && info.EmerContact.length > 0)
      data["emerEmail"] = info.EmerContact[0].email;
    if (info.EmerContact && info.EmerContact.length > 0)
      data["emerPhoneNum"] = info.EmerContact[0].phoneNum;

    this.setState({ data });
    console.log(data);
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
    console.log(data);
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state.data);
  };

  render() {
    var { myInfo } = this.state;
    return (
      <div className="popUp">
        <div className="popUp-background2">
          <div className="popUp--container">
            <div className="row">
              <div className="col s6">
                <h4 className="text--blue">個人資料</h4>
                <div className="row">
                  <div className="col s4 infoText">
                    <div>英文姓氏</div>
                    <div>英文名字</div>
                    <div>出生日期</div>
                    <div>稱謂</div>
                    <div>證件號碼</div>
                    <div>證件有效期</div>
                    <div>電郵</div>
                    <div>手提電話</div>
                  </div>
                  <div className="col s8">
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.lastNameEng ? myInfo.lastNameEng : ""
                      }
                      name="lastNameEng"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.firstNameEng ? myInfo.firstNameEng : ""
                      }
                      name="firstNameEng"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={myInfo.BOD ? this.date(myInfo.BOD) : ""}
                      name="BOD"
                      placeholder="YYYY-MM-DD"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={myInfo.title ? myInfo.title : ""}
                      name="title"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.passportNum ? myInfo.passportNum : ""
                      }
                      name="passportNum"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.passportDate
                          ? this.date(myInfo.passportDate)
                          : ""
                      }
                      name="passportDate"
                      placeholder="YYYY-MM-DD"
                      onChange={this.handleChange}
                    />
                    <input
                      type="email"
                      className="validate"
                      defaultValue={myInfo.email ? myInfo.email : ""}
                      name="email"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={myInfo.phoneNum ? myInfo.phoneNum : ""}
                      name="phoneNum"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col s6">
                <h4 className="text--blue">付款方式</h4>
                <div className="row">
                  <div className="col s4 infoText">
                    <div>信用卡號碼</div>
                    <div>持卡人姓名</div>
                  </div>
                  <div className="col s8">
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.Payment && myInfo.Payment.length > 0
                          ? myInfo.Payment[0].cardNumber
                          : ""
                      }
                      name="cardNumber"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.Payment && myInfo.Payment.length > 0
                          ? myInfo.Payment[0].cardHolderName
                          : ""
                      }
                      name="cardHolderName"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <h4 className="text--blue">緊急聯絡人</h4>
                <div className="row">
                  <div className="col s4 infoText">
                    <div>姓名</div>
                    <div>關係</div>
                    <div>電郵</div>
                    <div>聯絡電話</div>
                  </div>
                  <div className="col s8">
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.EmerContact && myInfo.EmerContact.length > 0
                          ? myInfo.EmerContact[0].emerContactName
                          : ""
                      }
                      name="emerContactName"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.EmerContact && myInfo.EmerContact.length > 0
                          ? myInfo.EmerContact[0].relationship
                          : ""
                      }
                      name="relationship"
                      onChange={this.handleChange}
                    />
                    <input
                      type="email"
                      className="validate"
                      defaultValue={
                        myInfo.EmerContact && myInfo.EmerContact.length > 0
                          ? myInfo.EmerContact[0].email
                          : ""
                      }
                      name="emerEmail"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.EmerContact && myInfo.EmerContact.length > 0
                          ? myInfo.EmerContact[0].phoneNum
                          : ""
                      }
                      name="emerPhoneNum"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="btn--center">
                  <a
                    className="popUp--btn btn--white"
                    onClick={this.props.closePopup}
                  >
                    上一步
                  </a>
                  <a
                    className="popUp--btn btn--blue"
                    onClick={this.handleSubmit}
                  >
                    付款
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentPop;
