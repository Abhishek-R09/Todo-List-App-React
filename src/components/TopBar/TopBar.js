import React, { useEffect, useState } from "react";
import companyLogo from "../../assets/images/companyLogo.png";
import classes from "./TopBar.module.css";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const TopBar = (props) => {
  const [profileState, setProfileState] = useState("");

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 1000);
    axios
      .get(`https://picsum.photos/id/${randomNum}/info`, { crossDomain: true })
      .then((response) => {
        setProfileState(response.data.download_url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onLoggedIn = (
    <React.Fragment>
      <div className={classes.TopLink}>
        <Link to="/logout">Signout</Link>
      </div>
      {profileState ? (
        <img src={profileState} alt="Profile" className={classes.Profile} />
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );

  const onLoggedOut = (
    <div className={classes.TopLink}>
      {props.location.pathname === "/login" ? (
        <Link to="/signup">Sign up</Link>
      ) : props.location.pathname === "/signup" ? (
        <Link to="/login">Log in</Link>
      ) : null}
    </div>
  );
  return (
    <header className={classes.TopBar}>
      <img
        src={companyLogo}
        alt="Company Logo"
        className={classes.CompanyLogo}
      />
      <h1>TasksBoard</h1>
      {props.isAuthenticated ? onLoggedIn : onLoggedOut}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default withRouter(connect(mapStateToProps)(TopBar));
