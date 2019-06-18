import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class PhotoSlider extends Component {
  state = {};
  componentDidMount() {
    const options = {
      indicators: false,
      height: 500,
      interval: 4000,
      duration: 500
    };
    M.Slider.init(this.Slider, options);
  }
  render() {
    return (
      <React.Fragment>
        <div
          ref={Slider => {
            this.Slider = Slider;
          }}
          className="slider photoSlider"
        >
          {/* If you want fullscreen slider then add fullscreen to
      this div */}
          <ul className="slides">
            <li>
              <img src="./../image/Travel.jpg" />
            </li>
            <li>
              <img src="./../image/Travel2.jpg" />
            </li>
            <li>
              <img src="./../image/Travel3.jpg" />
            </li>
            <li>
              <img src="./../image/Travel4.jpg" />
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default PhotoSlider;
