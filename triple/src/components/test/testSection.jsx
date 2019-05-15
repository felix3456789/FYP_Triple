import React, { Component } from "react";
class TestSection extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h5> {this.props.title}</h5>
          </div>
          <div className="col s12 ">{this.props.children}</div>
          <hr />
        </div>
      </div>
    );
  }
}

export default TestSection;
