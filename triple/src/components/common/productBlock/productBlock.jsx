import React, { Component } from "react";
import tourService from "../../../services/tourServices";
import "./productBlock.css";

class ProductBlock extends Component {
  handleClick = async () => {
    await tourService.inserHistory(this.props.id);
    await tourService.inserHistory(this.props.id);
    await tourService.inserHistory(this.props.id);
    await tourService.inserHistory(this.props.id);
    await tourService.inserHistory(this.props.id);
    await tourService.inserHistory(this.props.id);
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
