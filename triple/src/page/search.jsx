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
    compareChips: [],
    searchTag: [],
    search: ""
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  addSeachTag = tag => {
    let { searchTag } = this.state;
    searchTag.push(tag);
    this.setState({ searchTag, search: "" });
  };
  submitMessage = () => {
    let search = this.state.searchTag[0];
    for (var i = 1; i < this.state.searchTag.length; i++) {
      search += "+" + this.state.searchTag[i].substr(1);
    }
    window.location = "/search/" + search;
  };

  keyPressed = async e => {
    console.log(e.key);
    if (e.key === "Enter") {
      if (e.target.value != " ") {
        await this.addSeachTag(e.target.value);
      }
      this.submitMessage();
    }
    // else if (e.key === ";") {
    //   this.addSeachTag(e.target.value);
    //   console.log("add chips");
    else if (e.key === " ") {
      await this.addSeachTag(e.target.value);
      console.log("add space chips");
    }
  };

  loading() {
    const { isLoading } = this.state;
    if (isLoading == true) {
      return <LoadingScreen />;
    }
  }
  getTour = async () => {
    const { match: params } = this.props;
    let page = params.params.page;
    const keyword = params.params.keyword;

    console.log("params", params);
    console.log("keyword + page ");
    if (page == null) page = 1;
    let tours = null;
    if (keyword) {
      tours = await TourServices.getSearchByKeyword(keyword, page);
      console.log(tours);
    } else {
      tours = await TourServices.getSearchByTag("加拿大");
    }
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
    const { tours, compareChips, searchTag } = this.state;
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
        <div className="row searchRow">
          <div className="container searchRow__container">
            <input
              onChange={e => this.handleChange(e)}
              onKeyPress={this.keyPressed}
              value={this.state.search}
              placeholder="按空白鍵新增標籤/按ENTER搜尋"
              type="text"
            />
            {searchTag.map(item => (
              <div className="chip">{item}</div>
            ))}
          </div>
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
            {tours.length < 0 ? (
              tours.map(tour => (
                <SearchBox
                  items={tour}
                  compare={this.handleCompare}
                  compareChips={compareChips}
                />
              ))
            ) : (
              <h1>沒有結果</h1>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
