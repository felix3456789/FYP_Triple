import React, { Component } from "react";
import LoginBox from "./../components/loginPage/loginBox/loginBox";
import TestSection from "../components/test/testSection";
class Test extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TestSection title="LoginBox">
          <LoginBox />
        </TestSection>
        <TestSection title="LoginBox2">
          <LoginBox />
        </TestSection>
      </React.Fragment>
    );
  }
}

export default Test;
