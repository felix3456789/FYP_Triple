import React, { Component } from "react";
import "../../css/comment.css";
import StarRatings from "../commentBox/star";
class CommentBox extends Component {
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
            <b className="col s2">{this.props.userName}Felix Tsange</b>
            <StarRatings starDimension="15px" />
          </div>
          <div className="row">
            <b className="col s2">{this.props.commentDate}2019-01-28</b>
            <p>{this.props.comment}GOOOOOOOOOOOOOOOOOOD</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentBox;
