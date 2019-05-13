import React from "react";
import Login from "./page/login";
import Test from "./page/test";
import { Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;
