import React, { Component } from "react";
import UserDash from "./../components/common/nav/userDash";
import BasicInfo from "./../components/userInfo/basicInfo";

class UserInfo extends Component {
  state = {};
  render() {
    return (
      <UserDash>
        <div className="container">
          <h1>this is userInfo</h1>
          <div className="row">
            <div className="col s4">
              <BasicInfo />
            </div>
            <div className="col s4">
              <BasicInfo />
            </div>
            <div className="col s4">
              <BasicInfo />
            </div>
          </div>
        </div>
      </UserDash>
    );
  }
}

export default UserInfo;
