import React, { Component } from "react";
import "../../css/card.css";
import { Icon } from "@material-ui/core";

class userCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="marginButtonZero row">
          <div className="col s12 m10 l8">
            <div className="card-panel panelPadding">
              <Icon className="color right fontSize">bookmark</Icon>
              <div className="marginButtonZero row">
                <div className="col s12 m5 l3">
                  <img
                    className="responsive-img marginTop10 radius5px"
                    src="./image/845.jpg"
                  />
                </div>
                <div className="col s12 m7 l9">
                  <div className="row marginButtonZero">
                    <span className="col s12 fontPositon fontSize18 color">
                      春の戀花 (未成團)
                    </span>
                    <span className="col s12 fontPositon color fontSize14 ">
                      中山、澳門 新春加班 2天直航團
                    </span>
                    <div className="col s5 color paddingleftZero">
                      <span className="row">
                        <span className="col s12">出發日子: </span>
                        <span className="col s12">2019/02/08 - 2019/02/09</span>
                      </span>
                    </div>
                    <div className="col s3 color paddingleftZero">
                      <span className="row">
                        <span className="col s12">報團人數: </span>
                        <span className="col s12">2 成人</span>
                      </span>
                    </div>
                    <div className="col s3 color paddingleftZero">
                      <span className="row">
                        <span className="col s12">付款情況: </span>
                        <span className="col s12">已付款</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default userCard;
