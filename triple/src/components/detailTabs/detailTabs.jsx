import React, { Component } from "react";
import M from "materialize-css";

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
          class="tabs"
        >
          <li class="tab col s2 ">
            <a href="#test-swipe-1">本團特色</a>
          </li>
          <li class="tab col s2">
            <a href="#test-swipe-2">行程安排</a>
          </li>
          <li class="tab col s2">
            <a href="#test-swipe-3">交通資料</a>
          </li>
          <li class="tab col s2">
            <a href="#test-swipe-4">自費活動</a>
          </li>
          <li class="tab col s2">
            <a href="#test-swipe-5">注意事項</a>
          </li>
        </ul>

        <div id="test-swipe-1" class="col s12 light-blue lighten-5">
          Test 1
        </div>
        <div id="test-swipe-2" class="col s12 light-blue lighten-4">
          Test 2
        </div>
        <div id="test-swipe-3" class="col s12 light-blue lighten-3">
          Test 3
        </div>
        <div id="test-swipe-4" class="col s12 light-blue lighten-2">
          Test 4
        </div>
        <div id="test-swipe-5" class="col s12 light-blue lighten-1">
          Test 5
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
}

export default DetailTabs;
