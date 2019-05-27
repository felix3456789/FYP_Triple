import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import NavBar from "./nav";
import "./dashboardNav.css";

class DashBoardNav extends Component {
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <NavBar color="nav--color" textColor="loginNav--ul" />
        <div className="sidenav z-depth-1">
          <div>
            <NavLink to="/dashboard" exact>
              <div className="sidenav__item">
                <Icon className="sidenav__icon">share</Icon>
                <div className="sidenav__title">我的旅行團</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard" exact>
              <div className="sidenav__item">
                <Icon className="sidenav__icon">edit</Icon>
                <div className="sidenav__title">個人資料</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard" exact>
              <div className="sidenav__item">
                <Icon className="sidenav__icon">folder</Icon>
                <div className="sidenav__title">收藏</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard" exact>
              <div className="sidenav__item">
                <Icon className="sidenav__icon">help_outline</Icon>
                <div className="sidenav__title">幫助</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard" exact>
              <div className="sidenav__item">
                <Icon className="sidenav__icon">settings</Icon>
                <div className="sidenav__title">設定</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard" exact>
              <div className="sidenav__item">
                <Icon className="sidenav__icon">arrow_forward</Icon>
                <div className="sidenav__title">登出</div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="main">{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default DashBoardNav;
