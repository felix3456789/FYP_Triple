import React, { Component } from "react";
import LoginBox from "./../components/loginPage/loginBox/loginBox";
class Test extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5> Login Box</h5>
          </div>
          <div className="col-12">
            <LoginBox />
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Test;
