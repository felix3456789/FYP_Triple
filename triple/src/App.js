import React from "react";
import Login from "./page/login";
import Test from "./page/test";
import Home from "./page/home";
import { Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";
import "./css/icon.css";
import "./css/style.css";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/test" component={Test} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
