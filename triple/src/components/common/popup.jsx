import React, { Component } from "react";
import "../../css/popup.css";
class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner z-depth-5">{this.props.message}</div>
      </div>
    );
  }
}

export default Popup;
