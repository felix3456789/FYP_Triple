import React, { Component } from "react";
import tourService from "../../../services/tourServices";
import authService from "../../../services/authServices";
import "./productBlock.css";

class ProductBlock extends Component {
  handleClick = async () => {
    if (authService.getJwt()) await tourService.insertHistory(this.props.id);
    window.location = "/tour-detail/" + this.props.id;
  };
  render() {
    const { id, img, title } = this.props;
    return (
      <div className="productBlock">
        <h1 className="productBlock__title">{title}</h1>
        <img
          onClick={() => this.handleClick()}
          className="productBlock__img"
          alt="pdBlock"
          src={img}
        />
      </div>
    );
  }
}
export default ProductBlock;
