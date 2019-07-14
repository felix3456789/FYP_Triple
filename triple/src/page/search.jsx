import React, { Component } from "react";
import TourServices from "../services/tourServices";
import Nav from "../components/common/nav/nav";
import SearchBox from "../components/search/searchBox";
import "../css/searchPage.css";
import LoadingScreen from "../components/loading/loadingScreen";

class Search extends Component {
  state = {
    tours: [],
    isLoading: true,
    compareList: [],
    compareChips: []
  };

  loading() {
    const { isLoading } = this.state;
    if (isLoading == true) {
      return <LoadingScreen />;
    }
  }
  getTour = async () => {
    const tours = await TourServices.getSearchByTag("加拿大");
    this.setState({ tours: tours });
    console.log(this.state.tours);
  };

  getCompareChips = async () => {
    var compareList = await TourServices.getCompareList();
    let compareChips = [];
    if (compareList != null) {
      for (var i = 0; i < compareList.length; i++) {
        compareChips.push(compareList[i]);
      }
    }
    await this.setState({ compareList: compareList });

    await this.setState({ compareChips: compareChips });
  };

  componentDidMount = async () => {
    await this.getTour();
    const { match: params } = this.props;
    await this.getCompareChips();
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  };

  handleCompare = async (id, title) => {
    console.log(id);
    TourServices.editCompareList(id, title);
    await this.getCompareChips();
  };
  render() {
    const { tours, compareChips } = this.state;
    console.log(compareChips);
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
            <a className="btn btn--blue right" href="/compare">
              比較旅行團
            </a>
            {compareChips.map(item => (
              <div className="chip">
                {item.title}
                <i
                  className="chip--close material-icons"
                  onClick={() => this.handleCompare(item.id, item.title)}
                >
                  close
                </i>
              </div>
            ))}
            {tours.map(tour => (
              <SearchBox
                items={tour}
                compare={this.handleCompare}
                compareChips={compareChips}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
