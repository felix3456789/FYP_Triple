import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import "../../css/likeButton.css";

class LikeButton extends Component {
  state = {
    likeCount: this.props.likeCount,
    liked: this.props.liked
  };

  render() {
    return (
      //chat_bubble_outline
      //favorite_border
      //favorite
      <React.Fragment>
        <a onClick={this.likeOnClick}>
          <Icon>{this.iconName()}</Icon>
        </a>
        <span className="text"> {this.state.likeCount}</span>
      </React.Fragment>
    );
  }

  addLike() {
    this.setState({ likeCount: this.state.likeCount + 1, liked: true });
  }
  delLike() {
    this.setState({ likeCount: this.state.likeCount - 1, liked: false });
  }
  likeOnClick = () => {
    this.state.liked ? this.delLike() : this.addLike();
  };
  iconName() {
    return this.state.liked ? "favorite" : "favorite_border";
  }
}
export default LikeButton;
