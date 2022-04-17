import logoPath from "../assets/svg/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link className="header__logo-wrapper" to="/">
        <img className="header__logo" src={logoPath} alt="ava mind logo" />
        <p className="header__logo-text">AVA Mind</p>
      </Link>
      {props.children}
    </div>
  );
}
export default Header;
