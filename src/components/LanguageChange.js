import languagesPath from "../assets/svg/language.svg";
import React from "react";

function LanguageChange({ onLang }) {
  const [isVisible, setIsVisible] = React.useState(false);
  function handleLangsVisibility() {
    setIsVisible(!isVisible);
  }
  function handleCurrentLang(evt) {
    onLang(evt.target.name);
    setIsVisible(!isVisible);
  }
  return (
    <div className="header__langs-container">
      <div
        className={`header__buttons-container ${
          isVisible ? "header__buttons-container_visible" : ""
        }`}
      >
        <button
        name="en"
          onClick={handleCurrentLang}
          className="header__button-lang link_animated header__button-lang_value_en"
        >
          En
        </button>
        <button
        name="ru"
          onClick={handleCurrentLang}
          className="header__button-lang link_animated header__button-lang_value_ru"
        >
          Ru
        </button>
        <button
        name="uk"
          onClick={handleCurrentLang}
          className="header__button-lang link_animated header__button-lang_value_uk"
        >
          Uk
        </button>
      </div>
      <div className="header__lang-wrapper link_animated" onClick={handleLangsVisibility}>
        <img
          className="header__lang-wrapper-icon"
          src={languagesPath}
          alt="languages selection icon"
        />
      </div>
    </div>
  );
}
export default LanguageChange;
