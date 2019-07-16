import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectRoute = ({ component: Component, authed, ...rest }) => {
  var flag = false;
  if (authed != null) {
    flag = true;
  }
  return (
    <Route
      {...rest}
      render={props => {
        if (flag == true) return <Component {...props} />;
        else return <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectRoute;
