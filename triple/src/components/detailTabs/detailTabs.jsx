import React, { Component } from "react";
import M from "materialize-css";
import "../../css/tabs.css";

class DetailTabs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul
          ref={Tabs => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs"
        >
          <li className="tab col s2 ">
            <a href="#test-swipe-1">本團特色</a>
          </li>
          <li className="tab col s2">
            <a href="#test-swipe-2">行程安排</a>
          </li>
          <li className="tab col s2">
            <a href="#test-swipe-3">交通資料</a>
          </li>
          <li className="tab col s2">
            <a href="#test-swipe-4">自費活動</a>
          </li>
          <li className="tab col s2">
            <a href="#test-swipe-5">注意事項</a>
          </li>
        </ul>

        <div id="test-swipe-1" className="col s12 light-blue lighten-5">
          {this.props.t1}
        </div>
        <div id="test-swipe-2" className="col s12 light-blue lighten-4">
          {this.props.t2}
        </div>
        <div id="test-swipe-3" className="col s12 light-blue lighten-3">
          {this.props.t3}
        </div>
        <div id="test-swipe-4" className="col s12 light-blue lighten-2">
          {this.props.t4}
        </div>
        <div id="test-swipe-5" className="col s12 light-blue lighten-1">
          {this.props.t5}
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
}

export default DetailTabs;
