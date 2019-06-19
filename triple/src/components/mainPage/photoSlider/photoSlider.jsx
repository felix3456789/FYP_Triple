import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class PhotoSlider extends Component {
  state = {};
  componentDidMount() {
    const options = {
      indicators: false,
      interval: 4000,
      duration: 500,
      height: 300
    };
    M.Slider.init(this.Slider, options);
  }

  render() {
    const tour = this.props.tourContent;
    let photo1 = "";
    let photo2 = "";
    let photo3 = "";
    let photo4 = "";
    let photo5 = "";
    if (tour.tourID) {
      photo1 = tour.image[1];
      photo2 = tour.image[2];
      photo3 = tour.image[3];
      photo3 = tour.image[4];
      photo3 = tour.image[5];
    }
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
            {/* {tour.image
              ? tour.image.map(image => (
                  <li>
                    <img src={image} />
                  </li>
                ))
              : ""} */}
            <li>
              <img src={photo1} />
            </li>
            <li>
              <img src={photo2} />
            </li>
            <li>
              <img src={photo3} />
            </li>
            <li>
              <img src={photo4} />
            </li>
            <li>
              <img src={photo5} />
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default PhotoSlider;
