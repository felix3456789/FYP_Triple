import React, { Component } from "react";
import Form from "../../common/form";
class EnquiryCard extends Form {
  state = {};
  render() {
    return (
      <div className="card enquiryCard__layout">
        <div className="card-content ">
          <span className="enquiryCard__title">立即查詢最新旅行團</span>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="search"
                name="search"
                type="text"
                className="validate"
                onChange={this.handleChange}
              />
              <label htmlFor="search">搜尋地點，類別...</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EnquiryCard;
