import React, { Component } from "react";
import "../../css/paymentPop.css";
import userService from "../../services/userServices";
import authService from "../../services/authServices";
import { async } from "q";

class PaymentPop extends Component {
  state = {
    myInfo: []
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
  };

  render() {
    console.log("myInfo", this.state.myInfo);
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
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.firstNameEng ? myInfo.firstNameEng : ""
                      }
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={myInfo.BOD ? this.date(myInfo.BOD) : ""}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={myInfo.title ? myInfo.title : ""}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.passportNum ? myInfo.passportNum : ""
                      }
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.passportDate
                          ? this.date(myInfo.passportDate)
                          : ""
                      }
                    />
                    <input
                      type="email"
                      className="validate"
                      defaultValue={myInfo.email ? myInfo.email : ""}
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={myInfo.phoneNum ? myInfo.phoneNum : ""}
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
                        myInfo.Payment ? myInfo.Payment[0].cardNumber : ""
                      }
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.Payment ? myInfo.Payment[0].cardHolderName : ""
                      }
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
                        myInfo.EmerContact
                          ? myInfo.EmerContact[0].emerContactName
                          : ""
                      }
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.EmerContact
                          ? myInfo.EmerContact[0].relationship
                          : ""
                      }
                    />
                    <input
                      type="email"
                      className="validate"
                      defaultValue={
                        myInfo.EmerContact ? myInfo.EmerContact[0].email : ""
                      }
                    />
                    <input
                      type="text"
                      className="validate"
                      defaultValue={
                        myInfo.EmerContact ? myInfo.EmerContact[0].phoneNum : ""
                      }
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
                    onClick={this.props.handleSubmit}
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
