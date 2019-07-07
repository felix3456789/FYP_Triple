import React, { Component } from "react";
import TourServices from "../services/tourServices";
import Nav from "../components/common/nav/nav";
import SearchBox from "../components/search/searchBox";
import "../css/searchPage.css";

class Search extends Component {
  state = { tour: {} };
  getTour = async () => {
    const tour = await TourServices.getTourById("AJSGS05N");
    this.setState({ tour: tour[0] });
    console.log("tour", tour[0]);
  };
  componentDidMount = async () => {
    await this.getTour();
    const { match: params } = this.props;
    console.log(params.params.id);
  };
  render() {
    const { tour } = this.state;
    return (
      <React.Fragment>
        <Nav color="white-text" />

        <div className="div--background">
          <span className="bg--text">
            <span className="title--triple">Triple</span>
            <span className="title--slogan">Trip is simple!</span>
            <span className="title--chiSlogan">為你尋找最適合嘅旅行團</span>
          </span>
        </div>

        <div className="row">
          <div className="col s2" />
          <div className="col s8 div--container">
            <a className="btn btn--blue right">比較旅行團</a>
            <SearchBox items={tour} />
            <SearchBox items={tour} />
            <SearchBox items={tour} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
