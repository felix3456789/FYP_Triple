import React from "react";
import Form from "../../common/form";
import Popup from "../../common/popup";
import Register from "../register/register";
class LoginBox extends Form {
  state = {
    data: {
      userAccount: "",
      password: ""
    },
    showOTP: false
  };
  toggleOTP() {
    this.setState({
      showOTP: !this.state.showOTP
    });
    console.log(this.state.showOTP);
  }

  handleForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.data);
  };
  render() {
    return (
      <div className="card loginBox">
        <div className="card-content loginBox__cardContent--layout loginBox__text--color">
          <span className="loginBox__caption">登入</span>
          <div className="row">
            <form className="col s12" onSubmit={e => this.handleForm(e)}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="userAccount"
                    name="userAccount"
                    type="text"
                    className="validate loginBox__input"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="userAccount">會員帳號</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="validate loginBox__input"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">密碼</label>
                </div>
                <div className="login__btnGroup">
                  <button
                    type="button"
                    onClick={this.toggleOTP.bind(this)}
                    className="waves-effect waves-light btn-small loginBox__btn loginBox__btn--register"
                  >
                    註冊
                  </button>
                  <button
                    type="submit"
                    className="waves-effect waves-light btn-small loginBox__btn loginBox__btn--login"
                  >
                    登入
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {this.state.showOTP ? (
          <Popup
            message={
              <Register
                onSubmit={this.props.onSubmit}
                closePopup={this.toggleOTP.bind(this)}
              />
            }
          />
        ) : null}
      </div>
    );
  }
}

export default LoginBox;
