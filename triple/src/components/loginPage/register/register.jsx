import React, { Component } from "react";
import Form from "../../common/form";
class Register extends Form {
  /* state = {
    newAccount: "",
    newPassword: "",
    ConfirmPassword: "",
    chineseName: "",
    engName: "",
    birthday: "",
    email: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit Register");
  };*/
  render() {
    return (
      <React.Fragment>
        <div className="register__layout">
          <div>
            <span className="register__title">註冊</span>
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
        </div>
        <div className="register__tnc--layout">Tnc</div>
        <div className="login__btnGroup">
          <button
            type="button"
            onClick={this.props.closePopup}
            className="waves-effect waves-light btn-small loginBox__btn loginBox__btn--register"
          >
            取消
          </button>
          <button
            type="submit"
            className="waves-effect waves-light btn-small loginBox__btn loginBox__btn--login"
          >
            註冊
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
