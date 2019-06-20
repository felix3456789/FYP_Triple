import React, { Component } from "react";
import "../../../css/slider.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class PhotoSlider extends Component {
  state = {};
  componentDidMount() {
    const options = {
      indicators: false,

      height: 150,

      interval: 4000,
      duration: 500,
      height: 270
    };
    M.Slider.init(this.Slider, options);
  }

  render() {
    const tour = this.props.tourContent;
    let photo0 = "";
    let photo1 = "";
    let photo2 = "";
    let photo3 = "";

    if (tour.tourID) {
      photo0 = tour.image[0];
      photo1 = tour.image[1];
      photo2 = tour.image[2];
      photo3 = tour.image[3];
    }
    return (
      <React.Fragment>
        <div
          ref={Slider => {
            this.Slider = Slider;
          }}
          className="slider photoSlider boxShadow"
        >
          {/* If you want fullscreen slider then add fullscreen to
      this div */}
          <ul className="slides borderRadius">
            {/* {tour.image
              ? tour.image.map(image => (
                  <li>
                    <img src={image} />
                  </li>
                ))
              : ""} */}
            <li>
              <img src={photo1} className="borderRadius" />
            </li>
            <li>
              <img src={photo2} className="borderRadius" />
            </li>
            <li>
              <img src={photo3} className="borderRadius" />
            </li>
            <li>
              <img src={photo0} className="borderRadius" />
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default PhotoSlider;
