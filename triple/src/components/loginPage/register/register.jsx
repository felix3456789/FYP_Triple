import React, { Component } from "react";
class Register extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="register__layout">
          <span>註冊</span>
          <button onClick={this.props.closePopup}> close </button>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="newAccount"
                name="newAccount"
                type="text"
                className="validate loginBox__input"
                onChange={this.handleChange}
              />
              <label htmlFor="newAccount">會員帳號</label>
            </div>
            <div className="input-field col s12">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                className="validate loginBox__input"
                onChange={this.handleChange}
              />
              <label htmlFor="newPassword">密碼</label>
            </div>
            <div className="input-field col s12">
              <input
                id="ConfirmPassword"
                name="ConfirmPassword"
                type="password"
                className="validate loginBox__input"
                onChange={this.handleChange}
              />
              <label htmlFor="ConfirmPassword">確認密碼</label>
            </div>
            <div className="input-field col s12">
              <input
                id="chineseName"
                name="chineseName"
                type="text"
                className="validate loginBox__input"
                onChange={this.handleChange}
              />
              <label htmlFor="chineseName">中文姓名</label>
            </div>
            <div className="input-field col s12">
              <input
                id="engName"
                name="engName"
                type="text"
                className="validate loginBox__input"
                onChange={this.handleChange}
              />
              <label htmlFor="engName">英文姓名</label>
            </div>
            <div className="input-field col s12">
              <input
                id="birthday"
                name="birthday"
                type="date"
                className="validate loginBox__input"
                onChange={this.handleChange}
              />
              <label htmlFor="birthday">出生日期</label>
            </div>
            <div className="input-field col s12">
              <input
                id="email"
                name="email"
                type="email"
                className="validate loginBox__input"
                onChange={this.handleChange}
              />
              <label htmlFor="email">電郵地址</label>
            </div>
          </div>
        </div>
        <div className="register__tnc--layout">
          <p />
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
