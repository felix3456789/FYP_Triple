import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import "../../../css/nav.css";

class NavBar extends Component {
  state = {};
  render() {
    const { color, id } = this.props;
    return (
      <nav id={id}>
        <div className={"nav-wrapper  " + color}>
          <a href="/test" className="brand-logo">
            Triple
          </a>
          <ul id="nav-mobile" className="hide-on-med-and-down loginNav--ul">
            <li>
              <a href="sass.html">旅遊資訊</a>
            </li>
            <li>
              <a href="badges.html">獨立報團</a>
            </li>
            <li>
              <a href="collapsible.html">加入我們</a>
            </li>
            <li>
              <a href="collapsible.html">關於我們</a>
            </li>
            <li>
              <a href="collapsible.html">聯絡我們</a>
            </li>
            <li>
              <a href="collapsible.html">公司資料</a>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down ">
            <li>
              <a href="/test">
                <Icon className="vertMiddle">search</Icon>
              </a>
            </li>
            <li>
              <a href="badges.html">
                <Icon className="vertMiddle">notifications</Icon>
              </a>
            </li>
            <li>
              <a href="collapsible.html">
                <Icon className="vertMiddle">person</Icon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
