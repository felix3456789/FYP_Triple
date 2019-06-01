import React, { Component } from "react";
import "./productBlock.css";
const ProductBlock = props => {
  const { img, title } = props;
  return (
    <div className="productBlock">
      <h1 className="productBlock__title">{title}</h1>
      <img className="productBlock__img" alt="pdBlock" src={img} />
    </div>
  );
};

export default ProductBlock;
