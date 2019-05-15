import React, { Component } from "react";
import StarRatings from "react-star-ratings";

class StarRate extends Component {
  state = {
    true: true
  };
  render() {
    return (
      <React.Fragment>
        <StarRatings
          rating={this.props.rating}
          starDimension={this.props.starDimension}
          starSpacing="2px"
          starRatedColor="#0d47a1"
        />
      </React.Fragment>
    );
  }
}

export default StarRate;
