import React, { Component } from "react";
import "../../css/emergencyContact.css";

class EmergencyContact extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      disabled: true,
      ChineseLastName: "曾",
      ChineseFirstName: "爸爸",
      EnglishLastName: "Tsang",
      EnglishFirstName: "Ba Ba",
      call: "先生",
      phone_num: "66892222",
      email: "tsangbaba@abcd.com"
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
      phone_num,
      email
    } = this.state;
    return (
      <React.Fragment>
        <div className="card emergencyContactCard">
          <form>
            <div>
              <span className="left-align emergencyContact__title">
                緊急聯絡人資料
              </span>

              <span
                className={this.state.hide ? "hide-false" : ""}
                onClick={this.handleGameClik.bind(this)}
              >
                <a
                  className="right emergencyContact_edit"
                  onClick={this.handleGameClik.bind(this)}
                >
                  <i class="material-icons">edit</i>
                </a>
              </span>
            </div>

            <div className="emergencyContact__info">
              <div className="emergencyContact__header">
                <div className="emergencyContact__content-margin">
                  中文姓名:
                </div>
                <div className="emergencyContact__content-margin">
                  英文姓名:
                </div>
                <div className="emergencyContact__content-margin">稱謂:</div>
                <div className="emergencyContact__content-margin">
                  手提電話號碼:
                </div>
                <div className="emergencyContact__content-margin">Email:</div>
              </div>

              <div className="emergencyContact__content">
                <div
                  className={
                    this.state.disabled
                      ? "emergencyContact-div"
                      : "emergencyContact-div emergencyContact-div-active"
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
                      ? "emergencyContact-div"
                      : "emergencyContact-div emergencyContact-div-active"
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
                      ? "emergencyContact-div"
                      : "emergencyContact-div emergencyContact-div-active"
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
                      ? "emergencyContact-div"
                      : "emergencyContact-div emergencyContact-div-active"
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
                      ? "emergencyContact-div"
                      : "emergencyContact-div emergencyContact-div-active"
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

export default EmergencyContact;
