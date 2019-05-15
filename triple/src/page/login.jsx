import React, { Component } from "react";
import LoginBox from "../components/loginPage/loginBox/loginBox";
import LoginNav from "../components/common/nav/nav";
import "../css/login.css";
class Login extends Component {
  render() {
    return (
      <div className="login__background--img">
        <LoginNav
          color="grey lighten-5 loginNav__textColor"
          textColor="loginNav--ul"
        />
        <div className="loginBox__layout">
          <LoginBox />
        </div>
      </div>
    );
  }
}

export default Login;
