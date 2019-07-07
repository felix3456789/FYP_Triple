import React, { Component } from "react";
import TourServices from "../services/tourServices";
import Nav from "../components/common/nav/nav";
import SearchBox from "../components/search/searchBox";
import "../css/searchPage.css";
import LoadingScreen from "../components/loading/loadingScreen";

class Search extends Component {
  state = {
    tours: [],
    isLoading: true
  };

  loading() {
    const { isLoading } = this.state;
    if (isLoading == true) {
      return <LoadingScreen />;
    }
  }
  getTour = async () => {
    const tours = await TourServices.getFeatureTour(5);
    this.setState({ tours: tours });
    console.log(this.state.tours);

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  };
  componentDidMount = async () => {
    await this.getTour();
    const { match: params } = this.props;
    console.log(params.params.id);
  };
  render() {
    const { tours } = this.state;
    return (
      <React.Fragment>
        <div className={this.state.isLoading ? "loadingBg1" : "loadingBg0"}>
          {this.loading()}
        </div>
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

            {tours.map(tour => (
              <SearchBox items={tour} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
