import React, { Component } from "react";
import LoginBox from "../components/loginPage/loginBox/loginBox";
import LoginNav from "../components/loginPage/nav/nav";
import "../css/login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="login__background--img">
        <LoginNav />
        <div className="loginBox__layout">
          <LoginBox />
        </div>
      </div>
    );
  }
}

export default Login;
