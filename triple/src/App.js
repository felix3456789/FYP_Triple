import React, { Component } from "react";
import Login from "./page/login";
import Test from "./page/test";
import Home from "./page/home";
import TourDetailPage from "./page/tourDetailPage";
import { Route, Switch, Redirect } from "react-router-dom";
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
import UserBookmark from "./page/userBookmark";
import ProtectRoute from "./components/router/protectedRoute";
import AuthServices from "./services/authServices";

class App extends Component {
  state = {
    user: ""
  };

  getJwt = async () => {
    let { user } = this.state;
    const response = await AuthServices.getJwt();
    console.log("getJWT", response);
    this.setState({ user: response });
  };
  componentDidMount() {
    this.getJwt();
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route path="/test/:id" component={Test} />
          <Route exact path="/tour-detail/" component={TourDetailPage} />
          <Route path="/tour-detail/:id" component={TourDetailPage} />
          <Route path="/loading" component={LoadingScreen} />
          <Route path="/search" exact component={Search} />
          <Route path="/search/:keyword" component={Search} />
          <Route path="/search/:keyword/:page" component={Search} />
          {/* <Route path="/user/dashboard" component={UserDashBoard} /> */}
          <ProtectRoute
            authed={user}
            path="/user/dashboard"
            exact
            component={UserDashBoard}
          />
          <ProtectRoute
            authed={user}
            path="/user/bookmark"
            component={UserBookmark}
            exact
          />
          <ProtectRoute authed={user} path="/user/info" component={UserInfo} />
          <Route path="/compare" component={Compare} />
          <Route
            path="/login"
            render={props => {
              if (!user) return <Login />;
              else return <Redirect to="/user/dashboard" />;
            }}
          />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
