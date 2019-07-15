import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import "../../css/comment.css";
import StarRatingComponent from "react-star-rating-component";
import Form from "../common/form";

class TextComment extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1,

      comment: ""
    };
  }

  handleForm = e => {
    e.preventDefault();
    const data = {
      tourId: this.props.tourID,
      star: this.state.rating,
      comment: this.state.comment
    };
    this.props.handleSubmit(data);
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;
    return (
      <React.Fragment>
        <form className="pict" onSubmit={e => this.handleForm(e)}>
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

          <div className="col s5">
            <div className="row">
              <div className="input-field col s12">
                <Icon className="material-icons prefix">textsms</Icon>
                <textarea
                  name="comment"
                  type="text"
                  id="comment-input"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                />
                <label htmlFor="comment-input">我的評論</label>
              </div>
            </div>
          </div>

          <div className="col s2">
            <button className="btn btnColorBlue" type="submit" name="action">
              發表
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default TextComment;
