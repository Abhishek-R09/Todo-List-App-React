import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import TopBar from "./components/TopBar/TopBar";
import TaskLists from "./components/TaskLists/TaskLists";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

const App = (props) => {
  useEffect(() => {
    console.log(props.isAuthenticated);
    props.onTryAutoSignup();
  }, []);

  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/login" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" component={TaskLists} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <React.Fragment>
      <div className="App">
        <TopBar />
        {routes}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
