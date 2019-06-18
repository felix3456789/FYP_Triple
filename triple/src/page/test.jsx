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
import UserCard from "../components/userDashboardCard/userDashboardCard";
import Slider from "./../components/mainPage/slider/slider";
import Tag from "./../components/tag/tag";
import DateSelector from "./../components/dateSelector/dateSelector";
import Calendar from "../components/calendar/calendar";
import Payment from "./../components/userInfo/payment";
import BasicInfo from "./../components/userInfo/basicInfo";
import Friends from "./../components/userInfo/friends";
import EmergencyContact from "./../components/userInfo/emergencyContact";
import PhotoSlider from "./../components/mainPage/photoSlider/photoSlider";

import ProductBlock from "../components/common/productBlock/productBlock";
import SearchBox from "../components/search/searchBox";
import TourServices from "../services/tourServices";

import "../css/style.css";
import "../css/login.css";

class Test extends Component {
  state = {
    likeCount: 100,
    liked: false,
    commentCount: 9,
    rating: 4.4,
    tour: {}
  };
  getTour = async () => {
    const tour = await TourServices.getTourById("AJSGS05N");

    this.setState({ tour: tour[0] });
    console.log("tour", tour[0]);
  };
  componentDidMount = async () => {
    await this.getTour();
  };
  render() {
    const { tour } = this.state;
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
          <StarRate rating={this.state.rating} />
        </TestSection>
        <TestSection title="Comment">
          <CommentBox />
          <TextComment />
        </TestSection>
        <TestSection title="Detail Tabs">
          <DetailTabs pdf={tour.detail} tourContent={tour} />
        </TestSection>

        <TestSection title="Footer">
          <Footer />
        </TestSection>

        <TestSection title="Calendar">
          <Calendar />
        </TestSection>

        <TestSection title="slider">
          <Slider />
        </TestSection>

        <TestSection title="tag">
          <Tag />
        </TestSection>

        <TestSection title="DateSelector">
          <DateSelector />
        </TestSection>

        <TestSection title="payment">
          <Payment />
        </TestSection>

        <TestSection title="BasicInfo">
          <BasicInfo />
        </TestSection>

        <TestSection title="Friends">
          <Friends />
        </TestSection>

        <TestSection title="Emergency">
          <EmergencyContact />
        </TestSection>

        <TestSection title="PhotoSlider">
          <PhotoSlider />
        </TestSection>



        <TestSection title="UserCard">
          <UserCard />
        </TestSection>

        <TestSection title="searchBox">
          <SearchBox items={tour} />
        </TestSection>

        <TestSection title="ProductBlock">
          <ProductBlock img="/image/845.jpg" title="日本東京三日兩夜賞櫻團" />
          <ProductBlock img="/image/Travel.jpg" title="新加坡三日兩夜美食團" />
          <ProductBlock img="/image/Travel3.jpg" title="韓國短線團" />
        </TestSection>
      </React.Fragment>
    );
  }
}

export default Test;
