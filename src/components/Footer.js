import presentation from "../assets/svg/presentation.svg";
import contacts from "../assets/svg/contacts.svg";
import telegram from "../assets/svg/contacts_telegram.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import { translations } from "../contexts/translationContext";
import "../css/Footer.css";

function Footer({ lang }) {
  return (
    <nav className="footer">
      <a
        className="footer__link"
        href="https://drive.google.com/file/d/1pJOOJldevCgjPEjIRQGN4d_tk-xf_SoR/view"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="footer__link-icon"
          src={presentation}
          alt="ava mind presentation"
        />
        <p className="footer__link-text">
          {translations[lang].footerPresentation}
        </p>
      </a>
      <NavLink className="footer__link" to="/contacts">
        <img
          className="footer__link-icon"
          src={contacts}
          alt="ava mind contacts"
        />
        <p className="footer__link-text">{translations[lang].footerContacts}</p>
      </NavLink>
      <a
        className="footer__link"
        href="https://t.me/ava_mind_bot"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="footer__link-icon"
          src={telegram}
          alt="ava mind telegram"
        />
        <p className="footer__link-text">{translations[lang].footerTelegram}</p>
      </a>
    </nav>
  );
}
export default Footer;
