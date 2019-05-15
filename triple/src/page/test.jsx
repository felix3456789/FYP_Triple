import React, { Component } from "react";
import LoginBox from "./../components/loginPage/loginBox/loginBox";
import LoginNav from "../components/loginPage/nav/nav";
import TestSection from "../components/test/testSection";
import LikeButton from "../components/likeButton/likeButton";
import CommentButton from "../components/commentBtn/commentBtn";
import CommentBox from "../components/commentBox/comment";
import StarRate from "../components/commentBox/star";

import "../css/login.css";

import Slider from "./../components/mainPage/slider/slider";
import Tag from "./../components/tag/tag";


class Test extends Component {
  state = {
    likeCount: 100,
    liked: false,
    commentCount: 9,
    rating: 4.4,
    starDimension: "20px"
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

        <TestSection title="Like Button">
          <LikeButton
            likeCount={this.state.likeCount}
            liked={this.state.liked}
          />
        </TestSection>

        <TestSection title="Comment Button">
          <CommentButton commentCount={this.state.commentCount} />
        </TestSection>
        <TestSection title="rating">
          <StarRate
            rating={this.state.rating}
            starDimension={this.state.starDimension}
          />
          <CommentBox />
        </TestSection>

        <TestSection title="photoslider">
          <Slider />
        </TestSection>

        <TestSection title="tag">
          <Tag />
        </TestSection>

        
      </React.Fragment>
    );
  }
}

export default Test;
