import React from "react";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="AppAuth">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
