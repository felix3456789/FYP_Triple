import React from "react";
import Login from "./page/login";
import Test from "./page/test";
import Home from "./page/home";
import TourDetailPage from "./page/tourDetailPage";
import { Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";
import "./css/icon.css";
import "./css/style.css";
import UserDashBoard from "./page/userDashboard";
import Footer from "./components/footer/footer";
import LoadingScreen from "./components/loading/loadingScreen";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/test" component={Test} />
        <Route path="/test/:id" component={Test} />
        <Route path="/dashtest" component={UserDashBoard} />
        <Route exact path="/tour-detail/" component={TourDetailPage} />
        <Route path="/tour-detail/:id" component={TourDetailPage} />
        <Route path="/loading" component={LoadingScreen} />

        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
