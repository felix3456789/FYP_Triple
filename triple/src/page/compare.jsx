import React, { Component } from "react";
import LoadingScreen from "../components/loading/loadingScreen";
import TourServices from "../services/tourServices";
import Nav from "../components/common/nav/nav";
import StarRate from "../components/commentBox/star";
import "../css/compare.css";

class Compare extends Component {
  state = {
    toursList: [],
    tours: [],
    tour1: {},
    tour2: {},

    isLoading: true
  };
  loading() {
    const { isLoading } = this.state;
    if (isLoading == true) {
      return <LoadingScreen />;
    }
  }
  getTour = async () => {
    // const tour1 = await TourServices.getTourById("LATAS08W");
    // const tour2 = await TourServices.getTourById("AJODS05M");
    const tours = [];
    // this.setState({ toursList: ["LATAS08W", "AJODS05M", "AJSGS05N"] });
    const toursList = ["LATAS08W", "AJODS05M", "AJSGS05N", "ARHRO10"];
    for (var i = 0; i < toursList.length; i++) {
      tours.push((await TourServices.getTourById(toursList[i]))[0]);
      console.log(i);
    }
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
  render() {
    const { tours } = this.state;
    return (
      <div className="bgColor--white">
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

        <div className="container">
          <h3 className="text--blue fontSize--35">比較旅行團</h3>
          <div className="card-panel cardColor">
            <table className="highlight centered">
              <tbody>
                <tr>
                  <td />
                  {tours.map(tour => (
                    <td>
                      <img
                        src={tour.image ? tour.image[0] : ""}
                        className="imgSize"
                      />
                      <div className="text--blue fontSize--20 font--bolder">
                        {tour.title}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>價錢</td>
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
                  <td>旅行日數</td>
                  {tours.map(tour => (
                    <td>{tour.day}日</td>
                  ))}
                </tr>
                <tr>
                  <td>評價</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Compare;
