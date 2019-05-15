import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import "../../css/comment.css";
import StarRatingComponent from "react-star-rating-component";

class TextComment extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;
    return (
      <React.Fragment>
        <form className="pict">
          <img
            src="../image/Felix.png"
            alt="Felix"
            className="circle responsive-img pict col s1"
          />
          <div className="commentBox">
            <b className="col s2">Felix Tsang</b>
            <StarRatingComponent
              name="rate1"
              value={rating}
              starCount={5}
              starColor={"#0d47a1"}
              emptyStarColor={"rgb(203, 211, 227)"}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>

          <div class="col s5">
            <div class="row">
              <div class="input-field col s12">
                <Icon class="material-icons prefix">textsms</Icon>
                <textarea
                  type="text"
                  id="comment-input"
                  class="materialize-textarea"
                />
                <label for="comment-input">我的評論</label>
              </div>
            </div>
          </div>

          <div className="col s2">
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              發表
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default TextComment;
