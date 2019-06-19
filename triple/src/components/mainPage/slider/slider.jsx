import React, { Component } from "react";
import M from "materialize-css";
import TourServices from "../../../services/tourServices";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

class Slider extends Component {
  state = { tour1: [], tour2: [], tour3: [] };
  async getTourById(id) {
    let tour = await TourServices.getTourById(id);
    console.log(tour);
    return tour;
  }

  componentDidMount() {
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
    var tour1 = await this.getTourById("AJSGS05N");
    var tour2 = await this.getTourById("AJTBS05M");
    var tour3 = await this.getTourById("AJOJS05N");
    this.setState({ tour1, tour2, tour3 });
  }
  render() {
    const { tour1, tour2, tour3 } = this.state;
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
            src={tour1[0] ? tour1[0].image[0] : "./../image/Travel1.jpg"}
          />
        </a>
        <a className="carousel-item">
          <img
            alt="2"
            src={tour2[0] ? tour2[0].image[0] : "./../image/Travel1.jpg"}
          />
        </a>
        <a className="carousel-item">
          <img
            alt="3"
            src={tour3[0] ? tour3[0].image[0] : "./../image/Travel1.jpg"}
          />
        </a>
        <Link to={"/login"} className="carousel-item">
          <img
            alt="4"
            src={tour3[0] ? tour3[0].image[8] : "./../image/Travel1.jpg"}
          />
        </Link>
      </div>
    );
  }
}

export default Slider;
