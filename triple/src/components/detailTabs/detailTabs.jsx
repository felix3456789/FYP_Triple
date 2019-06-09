import React, { Component } from "react";
import M from "materialize-css";
import "../../css/tabs.css";

class DetailTabs extends Component {
  // printDetail() {
  //   let tour = this.props.tourContent;
  //   let text = "";
  //   if (tour.tourID) {
  //     tour.days.map((day, i) => {
  //       text = day.day;
  //       console.log(text);
  //       return text;
  //     });
  //   }
  // }

  render() {
    const tour = this.props.tourContent;

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

        <div id="test-swipe-1" className="contentBg">
          {/* {this.printDetail()} */}
        </div>
        <div id="test-swipe-2">
          <iframe
            src={this.props.pdf}
            frameborder="0"
            width="100%"
            height="500px"
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
}

export default DetailTabs;
