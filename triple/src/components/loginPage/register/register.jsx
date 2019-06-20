import React, { Component } from "react";
import Form from "../../common/form";
class Register extends Form {
  state = {
    data: {
      newAccount: "",
      newPassword: "",
      ConfirmPassword: "",
      chineseName: "",
      engName: "",
      birthday: "",
      email: ""
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit Register", this.state.data);
    this.props.onSubmit(this.state.data, 2);
  };
  render() {
    return (
      <React.Fragment>
        <form Style="display: inline" onSubmit={e => this.handleSubmit(e)}>
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
                  <label htmlFor="chineseName">英文姓氏</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="engName"
                    name="engName"
                    type="text"
                    className="validate loginBox__input"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="engName">英文名字</label>
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
          <div className="login__btnGroup centre">
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
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
