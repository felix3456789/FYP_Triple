import React, { Component } from "react";
import M from "materialize-css";
import TourServices from "../../../services/tourServices";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

class Slider extends Component {
  state = {
    tour1: [],
    tour2: [],
    tour3: [],
    tour4: [],
    tour5: [],
    features: []
  };
  async getTourById(id) {
    let tour = await TourServices.getTourById(id);
    console.log(tour);
    return tour;
  }

  getFeaturesTour = async () => {
    const features = await TourServices.getFeatureTour();
    this.setState({ features: features });
    console.log("features", features);
  };

  async componentDidMount() {
    await this.getFeaturesTour();

    this.initSlider();
    const options = {
      duration: 200,
      numVisible: 3,
      indicators: false,
      dist: -50,
      onCycleTo: () => {
        console.log("New Slide");
      }
    };
    M.Carousel.init(this.Carousel, options);
  }
  async initSlider() {
    var { features } = this.state;
    var tour1 = features[0];
    var tour2 = features[1];
    var tour3 = features[2];
    var tour4 = features[3];
    var tour5 = features[4];
    console.log(tour1);
    this.setState({ tour1, tour2, tour3, tour4, tour5 });
  }
  render() {
    const { tour1, tour2, tour3, tour4, tour5 } = this.state;
    return (
      <div
        class="carousel carousel-slider"
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
      >
        <a className="carousel-item">
          <img
            alt="1"
            src={tour1.tourID ? tour1.image[0] : "./../image/Travel1.jpg"}
          />
        </a>
        <a className="carousel-item">
          <img
            alt="2"
            src={tour2.tourID ? tour2.image[0] : "./../image/Travel1.jpg"}
          />
        </a>
        <a className="carousel-item">
          <img
            alt="3"
            src={tour3.tourID ? tour3.image[0] : "./../image/Travel1.jpg"}
          />
        </a>
        <Link to={"/login"} className="carousel-item">
          <img
            alt="4"
            src={tour4.tourID ? tour4.image[0] : "./../image/Travel1.jpg"}
          />
        </Link>
        <Link to={"/login"} className="carousel-item">
          <img
            alt="5"
            src={tour5.tourID ? tour5.image[0] : "./../image/Travel1.jpg"}
          />
        </Link>
      </div>
    );
  }
}

export default Slider;
