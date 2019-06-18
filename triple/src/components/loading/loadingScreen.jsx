import React, { Component } from "react";
import "./style.css";
class LoadingScreen extends Component {
  state = {};
  render() {
    return (
      <div className="preloader-wrapper big active center">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
