import React, { Component } from "react";
import moment from "moment";
import UserDash from "./../components/common/nav/userDash";
import BasicInfo from "./../components/userInfo/basicInfo";
import InfoCard from "./../components/userInfo/infoCard";
import UserServices from "../services/userServices";
class UserInfo extends Component {
  state = {
    basicInfo: {},
    payment1: [
      { title: "信用卡號碼", value: "123456789" },
      { title: "持卡人姓名", value: "Tsang Ho Ching" }
    ],
    emerContact: [
      { title: "中文姓名", value: "曾蟹蟹" },
      { title: "英文姓名", value: "Tsang Hi Hi" },
      { title: "聯絡電話", value: "22334455" }
    ],
    friend1: [
      { title: "中文姓名", value: "梁皓銓" },
      { title: "英文姓名", value: "Leung Ho Chuen, Allen" }
    ]
  };

  getUserInfo = async () => {
    const response = await UserServices.getUserInfo();
    let { basicInfo } = this.state;
    basicInfo = {
      firstNameEng: response.firstNameEng,
      lastNameEng: response.lastNameEng,
      title: response.title,
      BOD: moment(response.BOD).format("YYYY-MM-DD"),
      passportNum: response.passportNum,
      passportDate: moment(response.passportDate).format("YYYY-MM-DD"),
      email: response.email,
      phoneNum: response.phoneNum
    };
    this.setState({ basicInfo });
    console.log("UserInfo", response);
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
            <div className="col s4">
              <BasicInfo info={basicInfo} />
            </div>
            <div className="col s4">
              <InfoCard title="付款方式一" data={this.state.payment1} />
              <InfoCard title="緊急聯絡人" data={this.state.emerContact} />
              <InfoCard title="同行朋友" data={this.state.friend1} />
            </div>
            <div className="col s4">
              <BasicInfo />
            </div>
          </div>
        </div>
      </UserDash>
    );
  }
}

export default UserInfo;
