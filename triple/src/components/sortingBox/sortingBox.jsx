import React, { Component } from "react";
import "../../css/sortingBox.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class SortingBox extends Component {
  state = { textValue1: null, textValue2: null, tooltip: false };
  constructor(props, context) {
    super(props, context);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined
    };
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }
  handleChange = value => {
    this.setState({
      value: value
    });
  };
  onSlide = value => {
    this.setState({
      textValue1: value[0],
      textValue2: value[1]
    });
  };
  render() {
    const { value = "1" } = this.state;
    const { textValue1 = "699", textValue2 = "18000" } = this.state;
    return (
      <React.Fragment>
        <div className="card sortingBox__size">
          <form>
            <div className="sorting__info">
              <div className="sort__context">
                <span className="left spanfont">排序</span>
                <select className="browser-default selectbox">
                  <option value="0" selected>
                    價格: 低至高
                  </option>
                  <option value="1">價格: 高至低</option>
                  <option value="2">評分: 低至高</option>
                  <option value="3">評分: 高至低</option>
                </select>
              </div>
              <div className="sort__context">
                <DayPickerInput
                  className="sortingDate"
                  onDayChange={this.handleDayChange}
                  placeholder="出發日子"
                />
              </div>
              <div className="row sorting__info">
                <span>
                  <span className="left spanfont">價錢</span>
                </span>
              </div>
              <div className="sortingPrice">
                ${textValue1} ~ ${textValue2}
                <div>
                  <Nouislider
                    range={{ min: 399, max: 20000 }}
                    step={1}
                    start={[699, 18000]}
                    connect
                    onSlide={this.onSlide}
                  />
                </div>
              </div>
              <div className="row sorting__info">
                <span>
                  <span className="left spanfont">旅行日數</span>
                </span>
              </div>
              <div className="sortingDate">
                <span className="value">{value}天</span>
              </div>
              <div className="slider__sorting">
                <Slider
                  min={1}
                  max={365}
                  value={value}
                  tooltip={false}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <button
                  type="reset"
                  className="waves-effect waves-light btn-small button__sort--reset"
                >
                  重設
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SortingBox;
