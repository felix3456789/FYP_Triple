import React, { Component } from "react";
import "../../css/popup.css";
class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">{this.props.message}</div>
      </div>
    );
  }
}

export default Popup;
