import React, { Component } from "react";
import LoadingScreen from "../components/loading/loadingScreen";
import TourServices from "../services/tourServices";
import Nav from "../components/common/nav/nav";
import StarRate from "../components/commentBox/star";
import AuthServices from "../services/authServices";
import "../css/compare.css";
import { async } from "q";

class Compare extends Component {
  state = {
    toursList: [],
    tours: [],
    dayCount: 0,
    isLoading: true
  };
  loading() {
    const { isLoading } = this.state;
    if (isLoading == true) {
      return <LoadingScreen />;
    }
  }
  getTour = async () => {
    const tours = [];

    const toursList = await TourServices.getCompareList();
    this.setState({ toursList: toursList });

    if (toursList != null) {
      for (var i = 0; i < toursList.length; i++) {
        tours.push((await TourServices.getTourById(toursList[i].id))[0]);
        if (tours[i].day > this.state.dayCount)
          this.setState({ dayCount: tours[i].day });
      }
    }
    console.log("day", this.state.dayCount);

    console.log(this.state.toursList);
    this.setState({ tours });

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  };
  componentDidMount = async () => {
    await this.getTour();
    const { match: params } = this.props;
    console.log(params.params.id);
  };

  handleOnClick = async id => {
    if (AuthServices.getJwt()) await TourServices.inserHistory(id);
    window.location = "/tour-detail/" + id;
  };

  printDay() {
    let day = [];
    const { tours, dayCount } = this.state;
    for (var i = 0; i < dayCount; i++) {
      let content = [];
      content.push(<td className="title">第{i + 1}日</td>);
      tours.map(tour => {
        tour.days[i]
          ? content.push(
              <td>
                <b className="fontSize--16">{tour.days[i].title}</b> <br />
                {tour.days[i].stay}
                {tour.days[i].stay != " " ? <br /> : null}
                {tour.days[i].eat[0]}
                {tour.days[i].eat[0] ? <br /> : null}
                {tour.days[i].eat[1]}
                {tour.days[i].eat[1] ? <br /> : null}
                {tour.days[i].eat[2]}
                {tour.days[i].eat[2] ? <br /> : null}
              </td>
            )
          : content.push(<td />);
      });
      day.push(<tr>{content}</tr>);
    }
    return day;
  }

  render() {
    const { tours } = this.state;
    console.log("tourList", tours);
    return (
      <div>
        <div className={this.state.isLoading ? "loadingBg1" : "loadingBg0"}>
          {this.loading()}
        </div>
        <Nav position="absolute" color="white-text" />

        <div className="div--background">
          <span className="bg--text">
            <span className="title--triple">Triple</span>
            <span className="title--slogan">Trip is simple!</span>
            <span className="title--chiSlogan">為你尋找最適合嘅旅行團</span>
          </span>
        </div>

        <div className="div--container">
          <h3 className="text--blue fontSize--35">比較旅行團</h3>
          <div className="card-panel cardColor">
            <table className="highlight centered text--blue trBgColor--white">
              <tbody>
                <tr>
                  <td className="title" />
                  {tours.map(tour => (
                    <td>
                      <img
                        src={tour.image ? tour.image[0] : ""}
                        className="imgSize cursor--pointer"
                        onClick={() => this.handleOnClick(tour.tourID)}
                      />
                      <div
                        className="fontSize--20 font--bolder cursor--pointer"
                        onClick={() => this.handleOnClick(tour.tourID)}
                      >
                        {tour.title})
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="title">價錢</td>
                  {tours.map(tour => (
                    <td>
                      HKD{" "}
                      {tour.salesPrice != null
                        ? tour.salesPrice
                        : tour.originalPrice}
                      +
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="title">旅行日數</td>
                  {tours.map(tour => (
                    <td>{tour.day}日</td>
                  ))}
                </tr>
                <tr>
                  <td className="title">評價</td>
                  {tours.map(tour => (
                    <td>
                      <StarRate
                        rating={
                          tour.rating
                            ? tour.rating != "0"
                              ? Number(tour.rating)
                              : 0
                            : 0
                        }
                      />
                    </td>
                  ))}
                </tr>
                {this.printDay()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Compare;
