import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/user-Profile.png";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-img">
        <img src={Logo} alt="user" />
      </div>
    </div>
  );
};

export default Header;
