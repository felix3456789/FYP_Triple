import React, { Component } from "react";
import LoginBox from "./../components/loginPage/loginBox/loginBox";
import LoginNav from "../components/common/nav/nav";
import TestSection from "../components/test/testSection";
import LikeButton from "../components/likeButton/likeButton";
import CommentButton from "../components/commentBtn/commentBtn";
import CommentBox from "../components/commentBox/comment";
import StarRate from "../components/commentBox/star";
import DetailTabs from "../components/detailTabs/detailTabs";
import TextComment from "../components/commentBox/textComment";
import Footer from "../components/footer/footer";
import "../css/style.css";
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
          <div>
            <LoginNav
              id="testNav"
              color="grey lighten-5 loginNav__textColor"
              textColor="loginNav--ul"
            />
          </div>
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
        </TestSection>
        <TestSection title="Comment">
          <CommentBox />
          <TextComment />
        </TestSection>
        <TestSection title="Detail Tabs">
          <DetailTabs />
        </TestSection>
        <TestSection title="Footer">
          <Footer />
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
