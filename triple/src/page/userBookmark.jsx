import React, { Component } from "react";
import UserDash from "./../components/common/nav/userDash";
import Bookmark from "../components/bookmark/bookmark";
import UserServices from "../services/userServices";
import TourServices from "../services/tourServices";

class UserBookmark extends Component {
  state = {
    bookmarkList: []
  };

  getBookmark = async () => {
    const response = await UserServices.getBookmark();
    console.log(response);
    await this.setState({ bookmarkList: [] });
    let { bookmarkList } = this.state;

    for (var i = 0; i < response.length; i++) {
      let temp = {
        tourID: "",
        title: "",
        img: ""
      };
      let tour = await TourServices.getTourById(response[i]);
      console.log(tour);
      temp.tourID = tour[0].tourID;
      temp.title = tour[0].title.substr(0, 20) + "...";
      temp.img = tour[0].image[0];
      bookmarkList.push(temp);
    }
    await this.setState({ bookmarkList });
  };

  componentDidMount() {
    this.getBookmark();
  }

  handleDelete = async id => {
    await UserServices.bookmark(id);
    this.getBookmark();
  };
  render() {
    const { bookmarkList } = this.state;
    return (
      <UserDash>
        <div className="container">
          <h2>收藏</h2>
          <div className="row">
            {bookmarkList.map(item => (
              <Bookmark
                onDelete={this.handleDelete}
                key={item.tourID}
                tour={item}
              />
            ))}
          </div>
        </div>
      </UserDash>
    );
  }
}

export default UserBookmark;
