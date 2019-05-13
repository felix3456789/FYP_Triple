import React, { Component } from "react";
import LoginBox from "./../components/loginPage/loginBox/loginBox";
import LoginNav from "../components/loginPage/nav/nav";
import TestSection from "../components/test/testSection";
import "../css/login.css";
class Test extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TestSection title="LoginBox">
          <LoginBox />
        </TestSection>
        <TestSection title="Login NavBar">
          <LoginNav />
        </TestSection>
      </React.Fragment>
    );
  }
}

export default Test;
