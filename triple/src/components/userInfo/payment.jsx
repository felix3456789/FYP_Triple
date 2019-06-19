import React, { Component } from "react";
import "../../css/payment.css";

class Payment extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      disabled: true,
      creditcard_num: "445900324456112",
      EnglishFirstName: "Ho Ching",
      EnglishLastName: "Tsang",
      vaild_date: "05/22"
    };
  }
  handleGameClik() {
    this.setState({
      disabled: !this.state.disabled,
      hide: !this.state.hide
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const {
      EnglishLastName,
      EnglishFirstName,
      creditcard_num,
      creditcardHolder = [EnglishLastName + ", " + EnglishFirstName],
      vaild_date
    } = this.state;
    return (
      <React.Fragment>
        <div className="card paymentBox">
          <form>
            <div>
              <span className="payment__title">Payment mathod 1</span>

              <span
                className={this.state.hide ? "hide-false" : ""}
                onClick={this.handleGameClik.bind(this)}
              >
                <a
                  className="right payment_edit"
                  onClick={this.handleGameClik.bind(this)}
                >
                  <i class="material-icons">edit</i>
                </a>
              </span>
            </div>

            <div className="payment__info">
              <div className="payment__header">
                <div className="payment__content-margin">信用卡號碼:</div>
                <div className="payment__content-margin">持卡人姓名:</div>
                <div className="payment__content-margin">有效日期:</div>
              </div>

              <div className="payment__content">
                <div
                  className={
                    this.state.disabled
                      ? "payment-div"
                      : "payment-div payment-div-active"
                  }
                >
                  <input
                    className="editable_input"
                    type="text"
                    name="creditcard_num"
                    value={creditcard_num}
                    onChange={this.onChange}
                    disabled={this.state.disabled ? "disabled" : ""}
                  />
                </div>

                <div
                  className={
                    this.state.disabled
                      ? "payment-div"
                      : "payment-div payment-div-active"
                  }
                >
                  <input
                    className="editable_input"
                    type="text"
                    name="creditcardHolder"
                    value={creditcardHolder}
                    onChange={this.onChange}
                    disabled={this.state.disabled ? "disabled" : ""}
                  />
                </div>

                <div
                  className={
                    this.state.disabled
                      ? "payment-div"
                      : "payment-div payment-div-active"
                  }
                >
                  <input
                    className="editable_input"
                    type="text"
                    name="vaild_date"
                    value={vaild_date}
                    onChange={this.onChange}
                    disabled={this.state.disabled ? "disabled" : ""}
                  />
                </div>
              </div>
            </div>

            <div className={"hide-" + this.state.hide}>
              <button
                className="waves-effect waves-light btn-small button__save"
                type="submit"
              >
                儲存
              </button>

              <span onClick={this.handleGameClik.bind(this)}>
                <button
                  type="reset"
                  className="waves-effect waves-light btn-small button__cancel"
                  onClick={this.handleGameClik.bind(this)}
                >
                  取消
                </button>
              </span>
            </div>
          </form>
          <div className={this.state.hide ? "hide-false" : "payment__record"}>
            <button class="waves-effect waves-light btn-small button__record">
              付款記錄
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Payment;
