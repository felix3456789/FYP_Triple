import React, { Component } from "react";
import LoginBox from "../components/loginPage/loginBox/loginBox";
import LoginNav from "../components/common/nav/nav";
import AuthServices from "../services/authServices";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import "../css/login.css";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

class Login extends Component {
  state = { open: false, message: "" };
  handleSubmit = async (data, option) => {
    console.log("handleSubmit");
    if (option == 1) {
      let auth = await AuthServices.login(data);

      alert("成功登入");

      if (auth) window.location = "/";
    }
    if (option == 2) {
      let auth = await AuthServices.register(data);

      alert("申請帳號成功");
      if (auth) {
        window.location = "/login";
      }
    }
  };

  handleClick = Transition => () => {
    this.setState({ open: true, Transition });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="login__background--img">
        <LoginNav
          id="loginNav"
          color="grey lighten-5 loginNav__textColor"
          textColor="loginNav--ul"
        />
        <div className="loginBox__layout">
          <LoginBox
            onSubmit={this.handleSubmit}
            onClick={this.handleClick(TransitionUp)}
          />
          {this.state.message != "" ? (
            <Snackbar
              open={this.state.open}
              onClose={this.handleClose}
              TransitionComponent={this.state.Transition}
              ContentProps={{
                "aria-describedby": "message-id"
              }}
              message={<span id="message-id">{this.state.message}</span>}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Login;
