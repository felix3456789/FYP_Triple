import React, { Component } from "react";
import "../../css/basicInfo.css";

class BasicInfo extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      Member_Number: "1",
      Member_Name: "Felix Tsang",
      credit: "300",
      ChineseLastName: "曾",
      ChineseFirstName: "澔晴",
      EnglishLastName: "Tsang",
      EnglishFirstName: "Ho Ching",
      call: "先生",
      p_type: "香港特區護照(SAR)",
      p_date: "10-04-2025",
      p_number: "k23456789",
      p_vanue: "香港",
      phone_num: "67891230",
      email: "abcd@abcd.com"
    };
  }
  handleGameClik() {
    this.setState({ disabled: !this.state.disabled });
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      Member_Number,
      Member_Name,
      credit,
      ChineseLastName,
      ChineseFirstName,
      ChineseFullName = [ChineseLastName + " " + ChineseFirstName],
      EnglishLastName,
      EnglishFirstName,
      EnglishFullName = [EnglishLastName + " " + EnglishFirstName],
      call,
      p_type,
      p_date,
      p_number,
      p_vanue,
      phone_num,
      email
    } = this.state;
    return (
      <React.Fragment>
        <div className="card basicInfoBox">
          <div className="row">
            <div className="clearfix col s12">
              <a
                className="BasicInfo__Edit right"
                onClick={this.handleGameClik.bind(this)}
              >
                <i class="material-icons">edit</i>
              </a>
            </div>
            <div className="col s4">
              <img
                src="./../image/Felix.png"
                className="profileImg circle responsive-img"
              />
            </div>
            <div className="col s8">
              <div className="basicInfo__header">
                <div>會員編號:</div>
                <div>會員稱號:</div>
                <div>積分:</div>
              </div>
              <div className="basicInfo__content">
                <div>{Member_Number}</div>
                <div>{Member_Name}</div>
                <div>{credit}</div>
              </div>
            </div>
          </div>

          <h5 class="left-align BasicInfo__title">會員資料</h5>
          <div className="basicInfo__header">
            <div className="basicInfo__info__content-margin">中文姓名:</div>
            <div className="basicInfo__info__content-margin">英文姓名:</div>
            <div className="basicInfo__info__content-margin">稱謂:</div>
            <div className="basicInfo__info__content-margin">證件類型:</div>
            <div className="basicInfo__info__content-margin">證件有效期:</div>
            <div className="basicInfo__info__content-margin">證件號碼:</div>
            <div className="basicInfo__info__content-margin">證件簽發地:</div>
            <div className="basicInfo__info__content-margin">手提電話號碼:</div>
            <div className="basicInfo__info__content-margin">Email:</div>
          </div>

          <div className="basicInfo__info__content">
            <div
              className={
                this.state.disabled
                  ? "basicInfo_info-div"
                  : "basicInfo_info-div basicInfo_info-div-active"
              }
            >
              <input
                className="editable_input "
                type="text"
                name="ChineseFullName"
                value={ChineseFullName}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>
            <div
              className={
                this.state.disabled
                  ? "basicInfo_info-div"
                  : "basicInfo_info-div basicInfo_info-div-active"
              }
            >
              <input
                className="editable_input"
                type="text"
                name="EnglishFullName"
                value={EnglishFullName}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>

            <div
              className={
                this.state.disabled
                  ? "basicInfo_info-div"
                  : "basicInfo_info-div basicInfo_info-div-active"
              }
            >
              <input
                className="editable_input"
                type="text"
                name="call"
                value={call}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>

            <div
              className={
                this.state.disabled
                  ? "basicInfo_info-div"
                  : "basicInfo_info-div basicInfo_info-div-active"
              }
            >
              <input
                className="editable_input"
                type="text"
                name="p_type"
                value={p_type}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>

            <div
              className={
                this.state.disabled
                  ? "basicInfo_info-div"
                  : "basicInfo_info-div basicInfo_info-div-active"
              }
            >
              <input
                className="editable_input"
                type="text"
                name="p_date"
                value={p_date}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>

            <div
              className={
                this.state.disabled
                  ? "basicInfo_info-div"
                  : "basicInfo_info-div basicInfo_info-div-active"
              }
            >
              <input
                className="editable_input"
                type="text"
                name="p_number"
                value={p_number}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>

            <div
              className={
                this.state.disabled
                  ? "basicInfo_info-div"
                  : "basicInfo_info-div basicInfo_info-div-active"
              }
            >
              <input
                className="editable_input"
                type="text"
                name="p_vanue"
                value={p_vanue}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>

            <div
              className={
                this.state.disabled
                  ? "basicInfo_info-div"
                  : "basicInfo_info-div basicInfo_info-div-active"
              }
            >
              <input
                className="editable_input"
                type="text"
                name="phone_num"
                value={phone_num}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>

            <div
              className={
                this.state.disabled
                  ? "basicInfo_info-div"
                  : "basicInfo_info-div basicInfo_info-div-active"
              }
            >
              <input
                className="editable_input"
                type="text"
                name="email"
                value={email}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BasicInfo;
