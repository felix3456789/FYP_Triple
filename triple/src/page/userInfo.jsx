import React, { Component } from "react";
import moment from "moment";
import UserDash from "./../components/common/nav/userDash";
import BasicInfo from "./../components/userInfo/basicInfo";
import InfoCard from "./../components/userInfo/infoCard";
import UserServices from "../services/userServices";
class UserInfo extends Component {
  state = {
    basicInfo: {},
    payment: [],
    emerContact: [],
    friend1: []
  };

  getUserInfo = async () => {
    const response = await UserServices.getUserInfo();
    let { basicInfo } = this.state;
    basicInfo = {
      username: response.username,
      credit: response.Credit,
      firstNameEng: response.firstNameEng,
      lastNameEng: response.lastNameEng,
      title: response.title,
      BOD: moment(response.BOD).format("YYYY-MM-DD"),
      passportNum: response.passportNum,
      passportDate: moment(response.passportDate).format("YYYY-MM-DD"),
      email: response.email,
      phoneNum: response.phoneNum
    };
    let { payment } = this.state;
    for (var i = 0; i < response.Payment.length; i++) {
      let temp = [
        { title: "信用卡號碼", value: response.Payment[i].cardNumber },
        { title: "持卡人姓名", value: response.Payment[i].cardHolderName }
      ];
      payment.push(temp);
    }
    let { friend } = this.state;
    for (var i = 0; i < response.Friend.length; i++) {
      let temp = [
        { title: "姓名", value: response.Friend[i].friendName },
        { title: "生日日期", value: response.Friend[i].BOD },
        { title: "證件號碼", value: response.Friend[i].passportNum },
        { title: "證件有效日期", value: response.Friend[i].passportDate },
        { title: "電郵", value: response.Friend[i].email },
        { title: "電話", value: response.Friend[i].phoneNum }
      ];
      friend.push(temp);
    }
    let { emerContact } = this.state;
    for (var i = 0; i < response.EmerContact.length; i++) {
      let temp = [
        { title: "姓名", value: response.EmerContact[i].emerContactName },
        { title: "關係", value: response.EmerContact[i].relationship },
        { title: "電話", value: response.EmerContact[i].phoneNum },
        { title: "電郵", value: response.EmerContact[i].email }
      ];
      emerContact.push(temp);
    }
    this.setState({ basicInfo, payment, friend, emerContact });
    console.log("UserInfo", response);
  };

  getPayment = async () => {
    const response = await UserServices.getPayment();
  };

  componentDidMount() {
    this.getUserInfo();
  }
  render() {
    const { basicInfo } = this.state;
    return (
      <UserDash>
        <div className="container">
          <p className="dashboard__pageTitle">個人資料</p>
          <div className="row">
            <div className="col s5">
              <BasicInfo info={basicInfo} />
            </div>
            <div className="col s5">
              <InfoCard title="付款方式一" data={this.state.payment} />
              <InfoCard title="緊急聯絡人" data={this.state.emerContact} />
              <InfoCard title="同行朋友" data={this.state.friend1} />
            </div>
          </div>
        </div>
      </UserDash>
    );
  }
}

export default UserInfo;
