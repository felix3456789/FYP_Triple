import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "../../css/dateSelector.css";
import "react-day-picker/lib/style.css";

class DateSelector extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null
    };
  }
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day
    });
  }

  render() {
    return (
      <div class="card">
        <div class="card-content">
          <div class="row">
            <form>
              <div>
                <div class="col s4">
                  <h5 class="center-align">請選擇出發日期</h5>
                  <div class="center-align">
                    <DayPicker
                      showOutsideDays
                      selectedDays={this.state.selectedDay}
                      onDayClick={this.handleDayClick}
                      initialMonth={new Date(2019, 1)}
                      disabledDays={[
                        new Date(2019, 1, 9),
                        {
                          after: new Date(2019, 0, 31),
                          before: new Date(2019, 1, 8)
                        },
                        {
                          after: new Date(2019, 1, 20),
                          before: new Date(2019, 2, 1)
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div class="col s8 push-s2">
                <div class="row">
                  <div class="card-title">報團人數:</div>
                </div>
                <div class="row">
                  <div class="col s4 left-align dateSelector__title">成人</div>
                  <div class="col s2 ">
                    <input id="numberOfAdult" type="number" min="0" step="1" />
                  </div>
                  <div class="col s2 dateSelector__title">x HKD799</div>
                </div>

                <div class="row">
                  <div class="col s4  left-align dateSelector__title">
                    兒童2-11歲(佔床)
                  </div>
                  <div class="col s2 ">
                    <input
                      id="numberOfChildWithBed"
                      type="number"
                      min="0"
                      step="1"
                    />
                  </div>
                  <div class="col s2 dateSelector__title">x HKD699</div>
                </div>
                <div class="row">
                  <div class="col s4  left-align dateSelector__title">
                    兒童2-11歲(不佔床)
                  </div>
                  <div class="col s2 ">
                    <input
                      id="numberOfChildWithoutBed"
                      type="number"
                      min="0"
                      step="1"
                    />
                  </div>
                  <div class="col s2 dateSelector__title">x HKD679</div>
                </div>
                <div class="row">
                  <div class="col s4 left-align dateSelector__title">
                    嬰兒(不佔床)
                  </div>
                  <div class="col s2 ">
                    <input
                      id="numberOfBabyWithoutBed"
                      type="number"
                      min="0"
                      step="1"
                    />
                  </div>
                  <div class="col s2 dateSelector__title">x HKD350</div>
                </div>

                <div class="row">
                  <label>
                    <input class="with-gap" name="group3" type="radio" />
                    <span>
                      本人已細讀及同意<a href="#">網上條款</a>
                    </span>
                  </label>
                </div>

                <button
                  class="waves-effect waves-light btn-small button__next"
                  type="submit"
                >
                  下一步
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DateSelector;
