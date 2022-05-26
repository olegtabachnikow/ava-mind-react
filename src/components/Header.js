import logoPath from "../assets/svg/logoUk.svg";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header({ isHidden, children, handlePopup, isPopupOpened }) {
  const [scrolled, setIsScrolled] = React.useState(false);
  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return window.removeEventListener("scroll", () => {
      handleScroll();
    });
  }, [handleScroll]);
  function handleClick() {
    handlePopup(!isPopupOpened);
  }
  return (
    <div
      className={`header ${isHidden && "hidden"} ${scrolled && "header_white"}`}
    >
      <button
        className={`popup__button ${isPopupOpened && "popup__button_active"}`}
        type="button"
        onClick={handleClick}
      ></button>
      <Link className="header__logo-wrapper link_animated" to="/intro">
        <img className="header__logo" src={logoPath} alt="ava mind logo" />
        <p className="header__logo-text">AVAMind</p>
      </Link>
      {children}
    </div>
  );
}
export default Header;
