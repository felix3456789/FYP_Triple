import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import "../../css/likeButton.css";
class CommentButton extends Component {
  render() {
    return (
      <React.Fragment>
        <a>
          <Icon>chat_bubble_outline</Icon>
        </a>
        <span className="text"> {this.props.commentCount}</span>
      </React.Fragment>
    );
  }
}

export default CommentButton;
