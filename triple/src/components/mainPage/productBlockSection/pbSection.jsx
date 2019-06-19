import React, { Component } from "react";
import ProductBlock from "../../common/productBlock/productBlock";
class PbSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.title}</h2>
        <ProductBlock img="/image/845.jpg" title="日本東京三日兩夜賞櫻團" />
        <ProductBlock img="/image/845.jpg" title="日本東京三日兩夜賞櫻團" />
        <ProductBlock img="/image/845.jpg" title="日本東京三日兩夜賞櫻團" /> ;
      </React.Fragment>
    );
  }
}

export default PbSection;
