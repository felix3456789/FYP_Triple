import React, { Component } from "react";
import "./basicInfo.css";
class BasicInfo extends Component {
  state = {};
  render() {
    return (
      <div className="basicInfo z-depth-2 ">
        <span className="right">hi</span>
        <div className="basinInfo__card">
          <div className="row">
            <div className="col s4">
              <img
                src="/image/Felix.png"
                className="basicInfo__img circle"
                alt=""
              />
            </div>
            <div className="col s8">
              <div className="clearfix basic__column">
                <span className="basicInfo__column--title">會員編號: </span>
                <span className="basicInfo__column--title">會員稱號: </span>
                <span className="basicInfo__column--title">積分: </span>
              </div>
              <div className="clearfix basic__column">
                <span className="basicInfo__column--content">1</span>
                <span className="basicInfo__column--content">Felix Tsang</span>
                <span className="basicInfo__column--content">1234</span>
              </div>
            </div>
          </div>
          <div className="row">
            <h3>會員資料</h3>
            <div className=" basicInfo__columnInfo--title">
              <span className="basicInfo__columnInput--title">中文姓名</span>
              <span className="basicInfo__columnInput--title">英文姓名</span>
              <span className="basicInfo__columnInput--title">稱謂</span>
              <span className="basicInfo__columnInput--title">證件類型</span>
              <span className="basicInfo__columnInput--title">證件有效期</span>
              <span className="basicInfo__columnInput--title">證件號碼</span>
              <span className="basicInfo__columnInput--title">證件簽發地</span>
              <span className="basicInfo__columnInput--title">
                手提電話號碼
              </span>
              <span className="basicInfo__columnInput--title">電郵</span>
            </div>
            <div className=" basicInfo__columnInfo--content">
              <input className="basicInfo__columnInput--content" />
              <input className="basicInfo__columnInput--content" />
              <input className="basicInfo__columnInput--content" />
              <input className="basicInfo__columnInput--content" />
              <input className="basicInfo__columnInput--content" />
              <input className="basicInfo__columnInput--content" />
              <input className="basicInfo__columnInput--content" />
              <input className="basicInfo__columnInput--content" />
              <input className="basicInfo__columnInput--content" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BasicInfo;
