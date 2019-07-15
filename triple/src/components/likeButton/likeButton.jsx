import React, { Component } from "react";
import userServices from "../../services/userServices";
import Icon from "@material-ui/core/Icon";
import "../../css/likeButton.css";
import { throwStatement } from "@babel/types";

class LikeButton extends Component {
  state = {
    liked: ""
  };

  iconName() {
    return this.props.liked ? "favorite" : "favorite_border";
  }

  render() {
    return (
      //chat_bubble_outline
      //favorite_border
      //favorite
      <React.Fragment>
        <a onClick={this.props.onLike}>
          <Icon className="iconStyle">{this.iconName()}</Icon>
        </a>
        <span className="fontPosition marginRight">{this.props.count}</span>
      </React.Fragment>
    );
  }
}
export default LikeButton;
