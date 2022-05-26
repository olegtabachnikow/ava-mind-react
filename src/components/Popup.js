import React from "react";
import chatIcon from "../assets/svg/chatIcon.svg";
import presentation from "../assets/svg/presentation.svg";
import contacts from "../assets/svg/contacts.svg";
import telegram from "../assets/svg/popupTelegram.svg";
import { Link } from "react-router-dom";
import { translations } from "../contexts/translationContext";
import languagesPath from "../assets/svg/language.svg";
import "../css/Popup.css";

function Popup({ currentLanguage, onLang, isPopupOpened, onClose }) {
  function handleCurrentLang(evt) {
    onLang(evt.target.name);
    onClose(false);
  }
  function handleClick() {
    onClose(false);
  }
  return (
    <div className={`popup ${isPopupOpened && "popup_active"}`}>
      <div className="popup__header"></div>
      <nav className="popup__navbar">
        <Link className="popup__link" to="/intro" onClick={handleClick}>
          <img
            className="popup__link-icon"
            src={chatIcon}
            alt="ava mind chat icon"
          />
          <p className="popup__link-text">
            {translations[currentLanguage].popupMainPage}
          </p>
        </Link>
        <a
          className="popup__link"
          href="https://drive.google.com/file/d/1ZBydUl-q4x7fMlHGT-KXoW5gMaLak_IO/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="popup__link-icon"
            src={presentation}
            alt="ava mind presentation"
          />
          <p className="popup__link-text">
            {translations[currentLanguage].footerPresentation}
          </p>
        </a>
        <Link onClick={handleClick} className="popup__link" to="/contacts">
          <img
            className="popup__link-icon"
            src={contacts}
            alt="ava mind contacts"
          />
          <p className="popup__link-text">
            {translations[currentLanguage].footerContacts}
          </p>
        </Link>
        <a
          className="popup__link"
          href="https://t.me/ava_mind_bot"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="popup__link-icon"
            src={telegram}
            alt="ava mind telegram"
          />
          <p className="popup__link-text">
            {translations[currentLanguage].footerTelegram}
          </p>
        </a>
      </nav>
      <div className="popup__languages-container">
        <img
          className="popup__link-icon"
          src={languagesPath}
          alt="languages selection icon"
        />
        <div className="popup__language-select">
          <button
            name="en"
            onClick={handleCurrentLang}
            className={`popup__button-lang ${
              currentLanguage === "en" && "popup__button-lang_active"
            }`}
          >
            En
          </button>
          <button
            name="ru"
            onClick={handleCurrentLang}
            className={`popup__button-lang ${
              currentLanguage === "ru" && "popup__button-lang_active"
            }`}
          >
            Ru
          </button>
          <button
            name="uk"
            onClick={handleCurrentLang}
            className={`popup__button-lang ${
              currentLanguage === "uk" && "popup__button-lang_active"
            }`}
          >
            Uk
          </button>
        </div>
      </div>
    </div>
  );
}
export default Popup;
