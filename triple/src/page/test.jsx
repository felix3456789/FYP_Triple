import React, { Component } from "react";
import LoginBox from "./../components/loginPage/loginBox/loginBox";
import LoginNav from "../components/loginPage/nav/nav";
import TestSection from "../components/test/testSection";
import LikeButton from "../components/likeButton/likeButton";
import "../css/login.css";
class Test extends Component {
  state = {
    likeCount: 100
  };
  render() {
    return (
      <React.Fragment>
        <TestSection title="LoginBox">
          <LoginBox />
        </TestSection>

        <TestSection title="Login NavBar">
          <LoginNav />
        </TestSection>

        <TestSection title="LikeButton">
          <LikeButton likeCount={this.state.likeCount} />
        </TestSection>
      </React.Fragment>
    );
  }
}

export default Test;
