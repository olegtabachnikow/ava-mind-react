import logoPath from "../assets/svg/logoUk.svg";
import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css';

function Header(props) {
  return (
    <div className={`header ${props.isHidden && "hidden"}`}>
      <Link className="header__logo-wrapper link_animated" to="/intro">
        <img className="header__logo" src={logoPath} alt="ava mind logo" />
        <p className="header__logo-text">AVAMind</p>
      </Link>
      {props.children}
    </div>
  );
}
export default Header;
