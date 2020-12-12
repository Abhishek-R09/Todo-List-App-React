import { useEffect, useState } from "react";
import companyLogo from "../../assets/images/companyLogo.png";
import classes from "./TopBar.module.css";
import axios from "axios";
import Loader from "../UI/Loader/Loader";

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

  return (
    <header className={classes.TopBar}>
      <img
        src={companyLogo}
        alt="Company Logo"
        className={classes.CompanyLogo}
      />
      <h1>TasksBoard</h1>
      {profileState ? (
        <img src={profileState} alt="Profile" className={classes.Profile} />
      ) : (
        <Loader />
      )}
    </header>
  );
};
export default TopBar;
