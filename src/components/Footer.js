import presentation from "../assets/svg/presentation.svg";
import contacts from "../assets/svg/contacts.svg";
import telegram from "../assets/svg/contacts_telegram.svg";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { translations } from "../contexts/translationContext";
import '../css/Footer.css';

function Footer({ lang }) {
  return (
    <nav className="footer">
      <Link className="footer__link" to="#">
        <img
          className="footer__link-icon"
          src={presentation}
          alt="ava mind presentation"
        />
        <p className="footer__link-text">
          {translations[lang].footerPresentation}
        </p>
      </Link>
      <NavLink className="footer__link" to="#">
        <img
          className="footer__link-icon"
          src={contacts}
          alt="ava mind contacts"
        />
        <p className="footer__link-text">{translations[lang].footerContacts}</p>
      </NavLink>
      <Link className="footer__link" to="#">
        <img
          className="footer__link-icon"
          src={telegram}
          alt="ava mind telegram"
        />
        <p className="footer__link-text">{translations[lang].footerTelegram}</p>
      </Link>
    </nav>
  );
}
export default Footer;
