import React, { Component } from "react";
import moment from "moment";
import UserDash from "./../components/common/nav/userDash";
import BasicInfo from "./../components/userInfo/basicInfo";
import InfoCard from "./../components/userInfo/infoCard";
import AddCard from "./../components/userInfo/addCard";
import UserServices from "../services/userServices";
class UserInfo extends Component {
  state = {
    basicInfo: {},
    payment: [],
    emerContact: [],
    friend1: [],
    addCard: { type: "", data: [] }
  };

  init = async () => {
    let basicInfo = {};
    let payment = [];
    let emerContact = [];
    let friend1 = [];
    let addCard = { type: "", data: [] };
    await this.setState({ basicInfo, payment, emerContact, friend1, addCard });
  };
  getUserInfo = async () => {
    this.init();
    const response = await UserServices.getUserInfo();
    let { basicInfo } = this.state;
    basicInfo = {
      username: response.username,
      credit: response.Credit,
      firstNameEng: response.firstNameEng,
      lastNameEng: response.lastNameEng,
      title: response.title,
      BOD: response.BOD ? moment(response.BOD).format("YYYY-MM-DD") : "",
      passportNum: response.passportNum,
      passportDate: response.passportDate
        ? moment(response.passportDate).format("YYYY-MM-DD")
        : "",
      email: response.email,
      phoneNum: response.phoneNum
    };
    let { payment } = this.state;
    for (var i = 0; i < response.Payment.length; i++) {
      let temp = [
        {
          title: "信用卡號碼",
          value: response.Payment[i].cardNumber,
          label: "cardNumber",
          key: true
        },
        {
          title: "持卡人姓名",
          value: response.Payment[i].cardHolderName,
          label: "cardHolderName"
        }
      ];
      payment.push(temp);
    }
    let { friend1 } = this.state;
    for (var i = 0; i < response.Friend.length; i++) {
      let temp = [
        {
          title: "姓名",
          value: response.Friend[i].friendName,
          label: "friendName",
          key: true
        },
        {
          title: "生日日期",
          value: moment(response.Friend[i].BOD).format("YYYY-MM-DD"),
          label: "BOD"
        },
        {
          title: "證件號碼",
          value: response.Friend[i].passportNum,
          label: "passportNum"
        },
        {
          title: "證件有效日期",
          value: moment(response.Friend[i].passportDate).format("YYYY-MM-DD"),
          label: "passportDate"
        },
        { title: "電郵", value: response.Friend[i].email, label: "email" },
        { title: "電話", value: response.Friend[i].phoneNum, label: "phoneNum" }
      ];
      friend1.push(temp);
    }
    let { emerContact } = this.state;
    for (var i = 0; i < response.EmerContact.length; i++) {
      let temp = [
        {
          title: "姓名",
          value: response.EmerContact[i].emerContactName,
          label: "emerContactName",
          key: true
        },
        {
          title: "關係",
          value: response.EmerContact[i].relationship,
          label: "relationship"
        },
        {
          title: "電話",
          value: response.EmerContact[i].phoneNum,
          label: "phoneNum"
        },
        { title: "電郵", value: response.EmerContact[i].email, label: "email" }
      ];
      emerContact.push(temp);
    }
    this.setState({ basicInfo, payment, friend1, emerContact });
    console.log("UserInfo", response);
  };
  saveNewCard = async e => {
    e.preventDefault();
    let { addCard } = this.state;
    let response;
    let temp = {};
    for (var i = 0; i < addCard.data[0].length; i++) {
      temp[addCard.data[0][i].label] = addCard.data[0][i].value;
    }
    if (addCard.type == "payment") {
      response = await UserServices.addPayment(temp);
    } else if (addCard.type == "friend") {
      response = await UserServices.addFriend(temp);
    } else if (addCard.type == "emerContact") {
      response = await UserServices.addEmerContact(temp);
    }
    this.getUserInfo();
  };
  handleInputChange = e => {
    const { addCard } = this.state;
    console.log("add", addCard);
    for (var i = 0; i < addCard.data[0].length; i++) {
      if (addCard.data[0][i].label == e.target.name) {
        addCard.data[0][i].value = e.target.value;
      }
    }
    this.setState({ addCard });
  };
  deleteCard = async (type, key) => {
    let response;
    if (type == "payment") {
      response = await UserServices.delPayment(key);
    } else if (type == "friend") {
      response = await UserServices.delFriend(key);
    } else if (type == "emerContact") {
      response = await UserServices.delEmerContact(key);
    }
    this.getUserInfo();
  };
  addCard = async type => {
    const { addCard } = this.state;
    addCard.data = [];
    await this.setState({ addCard });
    let data;
    if (type == "payment") {
      addCard.label = "付款方式";
      data = [
        { title: "信用卡號碼", value: "", label: "cardNumber" },
        { title: "持卡人姓名", value: "", label: "cardHolderName" }
      ];
    } else if (type == "friend") {
      addCard.label = "同行朋友";
      data = [
        { title: "姓名", value: "", label: "friendName" },
        { title: "生日日期", value: "", label: "BOD" },
        { title: "證件號碼", value: "", label: "passportNum" },
        { title: "證件有效日期", value: "", label: "passportDate" },
        { title: "電郵", value: "", label: "email" },
        { title: "電話", value: "", label: "phoneNum" }
      ];
    } else if (type == "emerContact") {
      addCard.label = "緊急聯絡人";
      data = [
        { title: "姓名", value: "", label: "emerContactName" },
        { title: "關係", value: "", label: "relationship" },
        { title: "電話", value: "", label: "phoneNum" },
        { title: "電郵", value: "", label: "email" }
      ];
    }
    addCard.type = type;
    addCard.data.push(data);
    await this.setState({ addCard });
    console.log(this.state.addCard);
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
            <div className="col s4">
              <BasicInfo info={basicInfo} />
            </div>
            <div className="col s4">
              <InfoCard
                title="付款方式"
                onDelete={this.deleteCard}
                type="payment"
                addCard={() => this.addCard("payment")}
                data={this.state.payment}
              />
              <InfoCard
                title="緊急聯絡人"
                onDelete={this.deleteCard}
                type="emerContact"
                addCard={() => this.addCard("emerContact")}
                data={this.state.emerContact}
              />
              <InfoCard
                title="同行朋友"
                onDelete={this.deleteCard}
                type="friend"
                addCard={() => this.addCard("friend")}
                data={this.state.friend1}
              />
            </div>
            <div className="col s4">
              {this.state.addCard.type == "" ? null : (
                <AddCard
                  onSubmit={this.saveNewCard}
                  onInput={this.handleInputChange}
                  title={this.state.addCard.label}
                  data={this.state.addCard.data}
                />
              )}
            </div>
          </div>
        </div>
      </UserDash>
    );
  }
}

export default UserInfo;
