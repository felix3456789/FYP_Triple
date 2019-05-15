import React, { Component } from "react";
import "../../css/comment.css";
import StarRatings from "../commentBox/star";
class CommentBox extends Component {
  state = {};
  render() {
    return (
      <React.Fragment className="row">
        <div className="pict">
          <img
            src="../image/Felix.png"
            alt="Felix"
            className="circle responsive-img pict col s1"
          />
          <div>
            <b className="col s2">Felix Tsang</b>
            <StarRatings starDimension="15px" />
          </div>
          <div className="row">
            <b className="col s2">2019-01-29</b>
            <p>Good~</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CommentBox;
