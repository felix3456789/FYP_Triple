import React, { Component } from "react";
import "../../css/friends.css";
class Friends extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      disabled: true,
      ChineseLastName: "曾",
      ChineseFirstName: "媽媽",
      EnglishLastName: "Tsang",
      EnglishFirstName: "Ma Ma",
      call: "女士",
      p_type: "香港特區護照(SAR)",
      p_date: "10-04-2025",
      p_number: "k123545689",
      p_vanue: "香港",
      phone_num: "67897777",
      email: "tsangmama@abcd.com"
    };
  }
  handleGameClik() {
    this.setState({
      disabled: !this.state.disabled,
      hide: !this.state.hide
    });
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const {
      ChineseLastName,
      ChineseFirstName,
      ChineseFullName = [ChineseLastName + " " + ChineseFirstName],
      EnglishLastName,
      EnglishFirstName,
      EnglishFullName = [EnglishLastName + ", " + EnglishFirstName],
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
        <div className="card FriendsCard">
          <form>
            <div>
              <span className="friends__title">曾同行人資料</span>
              <span
                className={this.state.hide ? "hide-false" : ""}
                onClick={this.handleGameClik.bind(this)}
              >
                <a
                  className="right friends_edit"
                  onClick={this.handleGameClik.bind(this)}
                >
                  <i class="material-icons">edit</i>
                </a>
              </span>
            </div>
            <div className="friends__info">
              <div className="friends__header">
                <div className="friends__content-margin">中文姓名:</div>
                <div className="friends__content-margin">英文姓名:</div>
                <div className="friends__content-margin">稱謂:</div>
                <div className="friends__content-margin">證件類型:</div>
                <div className="friends__content-margin">證件有效期:</div>
                <div className="friends__content-margin">證件號碼:</div>
                <div className="friends__content-margin">證件簽發地:</div>
                <div className="friends__content-margin">手提電話號碼:</div>
                <div className="friends__content-margin">Email:</div>
              </div>
              <div className="friends__content">
                <div
                  className={
                    this.state.disabled
                      ? "friends-div"
                      : "friends-div friends-div-active"
                  }
                >
                  <input
                    className="editable_input"
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
                      ? "friends-div"
                      : "friends-div friends-div-active"
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
                      ? "friends-div"
                      : "friends-div friends-div-active"
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
                      ? "friends-div"
                      : "friends-div friends-div-active"
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
                      ? "friends-div"
                      : "friends-div friends-div-active"
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
                      ? "friends-div"
                      : "friends-div friends-div-active"
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
                      ? "friends-div"
                      : "friends-div friends-div-active"
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
                      ? "friends-div"
                      : "friends-div friends-div-active"
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
                      ? "friends-div"
                      : "friends-div friends-div-active"
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
            <div className={"hide-" + this.state.hide}>
              <button
                className="waves-effect waves-light btn-small button__save"
                type="submit"
              >
                儲存
              </button>

              <span onClick={this.handleGameClik.bind(this)}>
                <button
                  type="reset"
                  className="waves-effect waves-light btn-small button__cancel"
                  onClick={this.handleGameClik.bind(this)}
                >
                  取消
                </button>
              </span>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
