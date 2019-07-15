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
import Logout from "./page/logout";
import Search from "./page/search";
import UserInfo from "./page/userInfo";
import Compare from "./page/compare";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/test" component={Test} />
        <Route path="/test/:id" component={Test} />
        <Route exact path="/tour-detail/" component={TourDetailPage} />
        <Route path="/tour-detail/:id" component={TourDetailPage} />
        <Route path="/loading" component={LoadingScreen} />
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route path="/search" exact component={Search} />
        <Route path="/search/:keyword" component={Search} />
        <Route path="/search/:keyword/:page" component={Search} />
        <Route path="/user/dashboard" component={UserDashBoard} />
        <Route path="/user/info" component={UserInfo} />
        <Route path="/user/help" component={UserDashBoard} />
        <Route path="/compare" component={Compare} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
