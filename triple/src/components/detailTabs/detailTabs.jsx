import React, { Component } from "react";
import M from "materialize-css";
import "../../css/tabs.css";

class DetailTabs extends Component {
  render() {
    return (
      <div className="clearfix">
        <ul
          ref={Tabs => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs"
        >
          <li className="tab col s6 ">
            <a href="#test-swipe-1">行程安排</a>
          </li>
          <li className="tab col s6">
            <a href="#test-swipe-2">詳細資料</a>
          </li>
        </ul>

        <div id="test-swipe-1">
          {this.props.t1}
          <span>HI~HI</span>
        </div>
        <div id="test-swipe-2">
          {this.props.t2}
          <span>HELLO~HELLO</span>
        </div>
      </div>
    );
  }
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
}

export default DetailTabs;
