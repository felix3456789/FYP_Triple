import React, { Component } from "react";
import "../../css/comment.css";
import StarRatings from "../commentBox/star";
class CommentBox extends Component {
  date() {
    const { commentDate } = this.props;
    const newDate = new Date(commentDate);
    const year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let date = newDate.getDate();
    if (date < 10) {
      date = "0" + date;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return year + " - " + month + " - " + date;
  }

  render() {
    return (
      <div className="row">
        <div className="pict">
          <img
            src="../image/Felix.png"
            alt="Felix"
            className="circle responsive-img pict col s1"
          />
          <div>
            <b className="col s2">{this.props.userName}</b>
            <StarRatings starDimension="15px" rating={this.props.star} />
          </div>
          <div className="row">
            <b className="col s2">{this.date()}</b>
            <p>{this.props.comment}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentBox;
