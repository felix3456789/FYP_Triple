import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./bookmark.css";
class Bookmark extends Component {
  state = {};
  render() {
    const { tour, onDelete } = this.props;
    return (
      <div className="col s3">
        <div className="card bookmark clearfix">
          <img className="bookmark__img" src={tour.img} alt="" />
          <span
            onClick={() => onDelete(tour.tourID)}
            className="bookmark__delete"
          >
            <i class="small material-icons">delete</i>
          </span>
          <p className="bookmark__title">
            <Link to={"/tour-detail/" + tour.tourID}>{tour.title}</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Bookmark;
