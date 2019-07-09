import React, { Component } from "react";

import "../../css/dateSelector.css";

import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en");
BigCalendar.momentLocalizer(moment);
class DateSelector extends Component {
  state = { view: "month ", date: new Date() };
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: null
    };
  }

  render() {
    return (
      <div class="card">
        <div class="card-content">
          <div class="row">
            <form>
              <div>
                <div class="col s4">
                  <h5 class="center-align selector__text title__text">
                    請選擇出發日期
                  </h5>
                  <div class="center-align date__select">
                    <BigCalendar
                      events={[
                        {
                          title: "My event",

                          start: new Date(2019, 6, 1), // 10.00 AM
                          end: new Date(2019, 6, 11) // 2.00 PM
                        },
                        {
                          title: "My event",

                          start: new Date(2019, 6, 1), // 10.00 AM
                          end: new Date(2019, 6, 10) // 2.00 PM
                        }
                      ]}
                      step={60}
                      views={""}
                      view={this.state.view}
                      date={this.state.date}
                      onNavigate={date => this.setState({ date })}
                      onView={() => {}}
                    />
                  </div>
                </div>
              </div>
              <div class="col s8 push-s2">
                <div class="row">
                  <div class="card-title selector__text">報團人數:</div>
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

                <span className="total__cost">
                  合共: HKD <span className="total__cost--value">3000</span>
                </span>

                <div class="row comfrim__radio">
                  <label>
                    <input class="with-gap" name="group3" type="radio" />
                    <span className="selector__text">
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
