import React, { Component } from "react";
import M from "materialize-css";
import "../../css/tabs.css";

class DetailTabs extends Component {
  // printDetail() {
  //   const tour = this.props.tourContent;
  //   let text = "";
  //   if (tour.tourID) {
  //     console.log(tour.days);
  //     tour.days.forEach(day => {
  //       console.log(day.title);
  //       return (
  //         <div>
  //           <h1>{day.title}</h1>
  //         </div>
  //       );
  //     });
  //     return <span>HIASD</span>;
  //   } else {
  //     return <span>hihihihi</span>;
  //   }
  // }

  printDetail() {
    const tour = this.props.tourContent;
    let title, tourDay, eat, stay;
    if (tour.tourID) {
      tour.days.forEach(day => {
        // console.log(day.title);
        title = day.title;
        tourDay = day.day;

        stay = day.stay;
        console.log(title);
        console.log(tourDay);
        day.eat.forEach(food => {
          eat = food;
          console.log(eat);
        });
        console.log(stay);
      });
    }
  }

  render() {
    const tour = this.props.tourContent;
    console.log("tab", tour);
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
          {this.printDetail()}
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
