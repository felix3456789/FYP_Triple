import React, { Component } from "react";
import "../../css/comment.css";
class CommentBox extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img
          src="../image/Felix.jpg"
          alt="Felix"
          className="circle responsive-img pict"
        />
      </React.Fragment>
    );
  }
}

export default CommentBox;
