import React, { Component } from "react";
import UserServices from "../../services/userServices";
import "./basicInfo.css";
class BasicInfo extends Component {
  state = {
    data: {
      firstNameEng: "",
      lastNameEng: "",
      title: "",
      BOD: "",
      passportNum: "",
      passportDate: "",
      email: "",
      phoneNum: ""
    },
    editable: false
  };
  handleInput = e => {
    let { data } = this.state;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };
  handleEdit = () => {
    this.setState({ editable: !this.state.editable });
  };

  handleSubmit = e => {
    e.preventDefault();
    UserServices.updateUserInfo(this.state.data);
    console.log("submit");
  };

  render() {
    const { info } = this.props;
    console.log(this.state.data);
    return (
      <div className="basicInfo z-depth-2 ">
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.state.editable ? (
            <button
              type="button"
              className="editIcon right"
              onClick={this.handleEdit}
            >
              <i class="Small material-icons">save</i>
            </button>
          ) : (
            <button
              type="submit"
              className="editIcon right"
              onClick={this.handleEdit}
            >
              <i class="Small material-icons">create</i>
            </button>
          )}

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
                  <span className="basicInfo__column--content">
                    Felix Tsang
                  </span>
                  <span className="basicInfo__column--content">1234</span>
                </div>
              </div>
            </div>
            <div className="row">
              <h3>會員資料</h3>
              <div className=" basicInfo__columnInfo--title">
                <span className="basicInfo__columnInput--title">英文姓氏</span>
                <span className="basicInfo__columnInput--title">英文名字</span>
                <span className="basicInfo__columnInput--title">出生日期</span>
                <span className="basicInfo__columnInput--title">稱謂</span>
                <span className="basicInfo__columnInput--title">證件號碼</span>
                <span className="basicInfo__columnInput--title">
                  證件有效期
                </span>
                <span className="basicInfo__columnInput--title">電郵</span>
                <span className="basicInfo__columnInput--title">手提電話</span>
              </div>
              <div className=" basicInfo__columnInfo--content">
                <input
                  name="firstNameEng"
                  onChange={e => this.handleInput(e)}
                  defaultValue={info ? info.firstNameEng : null}
                  disabled={this.state.editable ? false : true}
                  className="basicInfo__columnInput--content"
                />
                <input
                  name="lastNameEng"
                  onChange={e => this.handleInput(e)}
                  defaultValue={info ? info.lastNameEng : null}
                  defaultValue={info ? info.lastNameEng : null}
                  disabled={this.state.editable ? false : true}
                  className="basicInfo__columnInput--content"
                />
                <input
                  name="BOD"
                  onChange={e => this.handleInput(e)}
                  defaultValue={info ? info.BOD : null}
                  defaultValue={info ? info.BOD : null}
                  disabled={this.state.editable ? false : true}
                  className="basicInfo__columnInput--content"
                />
                <input
                  name="title"
                  onChange={e => this.handleInput(e)}
                  defaultValue={info ? info.title : null}
                  disabled={this.state.editable ? false : true}
                  className="basicInfo__columnInput--content"
                />
                <input
                  name="passportNum"
                  onChange={e => this.handleInput(e)}
                  defaultValue={info ? info.passportNum : null}
                  disabled={this.state.editable ? false : true}
                  className="basicInfo__columnInput--content"
                />
                <input
                  name="passportDate"
                  onChange={e => this.handleInput(e)}
                  defaultValue={info ? info.passportDate : null}
                  disabled={this.state.editable ? false : true}
                  className="basicInfo__columnInput--content"
                />
                <input
                  name="email"
                  onChange={e => this.handleInput(e)}
                  defaultValue={info ? info.email : null}
                  disabled={this.state.editable ? false : true}
                  className="basicInfo__columnInput--content"
                />
                <input
                  name="phoneNum"
                  onChange={e => this.handleInput(e)}
                  defaultValue={info ? info.phoneNum : null}
                  disabled={this.state.editable ? false : true}
                  className="basicInfo__columnInput--content"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default BasicInfo;
