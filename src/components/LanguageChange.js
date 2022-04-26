import languagesPath from "../assets/svg/language.svg";
import React from "react";

function LanguageChange({ onChange, currentLang }) {
  const [lang, setLang] = React.useState("ru");
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    onChange(lang);
  });
  function handleLangsVisibility() {
    setIsVisible(!isVisible);
  }
  function handleCurrentLangEn() {
    setLang("en");
    setIsVisible(!isVisible);
  }
  function handleCurrentLangRu() {
    setLang("ru");
    setIsVisible(!isVisible);
  }
  function handleCurrentLangUk() {
    setLang("uk");
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
          onClick={handleCurrentLangEn}
          className="header__button-lang link_animated header__button-lang_value_en"
        >
          En
        </button>
        <button
          onClick={handleCurrentLangRu}
          className="header__button-lang link_animated header__button-lang_value_ru"
        >
          Ru
        </button>
        <button
          onClick={handleCurrentLangUk}
          className="header__button-lang link_animated header__button-lang_value_uk"
        >
          Uk
        </button>
      </div>
      <div className="header__lang-wrapper link_animated" onClick={handleLangsVisibility}>
        <span className="header__current-lang">{currentLang}</span>
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
