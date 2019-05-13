import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="nav-wrapper  grey lighten-5 loginNav__textColor">
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
                <img src="/icon/search.svg" />
              </a>
            </li>
            <li>
              <a href="badges.html">
                {" "}
                <img src="/icon/bell.svg" />
              </a>
            </li>
            <li>
              <a href="collapsible.html">
                {" "}
                <img src="/icon/account.svg" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
