import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../img/nanum_logo.png";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <a href="/">
        <img className="header__logo" src={logo} alt="nanum logo" />{" "}
      </a>
      <IconButton>
        <NotificationsIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
