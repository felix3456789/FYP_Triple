import React, { Component } from "react";
import "./productBlock.css";
const ProductBlock = props => {
  return (
    <div class="productBlock card">
      <div class="card-image">
        <img src="/image/travel3.jpg" />
        <span class="card-title">Card Title</span>
      </div>
    </div>
  );
};

export default ProductBlock;
