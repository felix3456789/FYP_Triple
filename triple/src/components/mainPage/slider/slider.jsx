import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Slider extends Component {
  state = {};

  componentDidMount() {
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
  render() {
    return (
      <div
        class="carousel carousel-slider "
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
      >
        <a className="carousel-item">
          <img alt="1" src="./../image/Travel.jpg" />
        </a>
        <a className="carousel-item">
          <img alt="2" src="./../image/Travel2.jpg" />
        </a>
        <a className="carousel-item">
          <img alt="3" src="./../image/Travel3.jpg" />
        </a>
        <a className="carousel-item">
          <img alt="4" src="./../image/Travel4.jpg" />
        </a>
      </div>
    );
  }
}

export default Slider;
