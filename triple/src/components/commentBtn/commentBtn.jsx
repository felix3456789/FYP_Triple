import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import "../../css/likeButton.css";
class CommentButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Icon className="iconStyle">chat_bubble_outline</Icon>
        <span className="fontPosition"> {this.props.commentCount}</span>
      </React.Fragment>
    );
  }
}

export default CommentButton;
