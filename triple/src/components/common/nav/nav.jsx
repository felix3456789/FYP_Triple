import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import "../../../css/nav.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    const { color, id, position } = this.props;
    return (
      <nav
        Style={position ? "position:" + position : "position:absolute"}
        id={id}
      >
        <div className={"nav-wrapper  " + color}>
          <a href="/" className="brand-logo">
            Triple
          </a>
          <ul id="nav-mobile" className="hide-on-med-and-down loginNav--ul">
            <li>
              <Link to="/">旅遊資訊</Link>
            </li>
            <li>
              <Link to="/">獨立報團</Link>
            </li>
            <li>
              <Link to="/">加入我們</Link>
            </li>
            <li>
              <Link to="/">關於我們</Link>
            </li>
            <li>
              <Link to="/">聯絡我們</Link>
            </li>
            <li>
              <Link to="/">公司資料</Link>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down ">
            <li>
              <a href="/search">
                <Icon className="vertMiddle">search</Icon>
              </a>
            </li>

            <li>
              <Link to={"/login"}>
                <Icon className="vertMiddle">person</Icon>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
