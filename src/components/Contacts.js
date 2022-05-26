import React from "react";
import { useNavigate } from "react-router-dom";
import { translations } from "../contexts/translationContext";
import "../css/Contacts.css";
import bg7 from "../assets/images/background-7.png";
import telegram from "../assets/svg/contacts_telegram.svg";
import linkedin from "../assets/svg/contacts_likedin.svg";
import zeldin from "../assets/images/zeldin.png";
import matveev from "../assets/images/matveev.jpg";
import rozovski from "../assets/images/rozovski.png";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow_back.svg";

function Contacts({ lang, setActiveStance, handleBackground }) {
  React.useEffect(() => {
    if (window.sessionStorage.getItem("name") == null) {
      navigate("/");
    }
    handleBackground(bg7);
  });
  React.useEffect(() => {
    handleActiveLink(true);
    return () => handleActiveLink(false);
  }, []);
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  function handleActiveLink(data) {
    setActiveStance(data);
  }
  return (
    <div className="content">
      <div className="contacts">
        <div className="contacts__wrapper">
          <h2 className="content__title contacts__main-title">
            {translations[lang].contactsTitle}
          </h2>
          <div className="contacts__content">
            <div className="contacts__item">
              <img
                className="contacts__item-photo"
                src={zeldin}
                alt="Misha Zeldin"
              />
              <div className="contacts__item-text-wrapper">
                <h3 className="contacts__title">
                  {translations[lang].contactsZeldinName}
                </h3>
                <span className="contacts__subtitle">
                  {translations[lang].contactsZeldinRole}
                </span>
                <div className="contacts__links">
                  <a
                    href="https://t.me/zeldinml"
                    target="_blank"
                    className="contacts__link"
                    rel="noreferrer"
                  >
                    <img
                      className="contacts__link-icon"
                      src={telegram}
                      alt="telegram icon"
                    />{" "}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zeldinml"
                    target="_blank"
                    className="contacts__link"
                    rel="noreferrer"
                  >
                    <img
                      className="contacts__link-icon"
                      src={linkedin}
                      alt="linkedin icon"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="contacts__item">
              <img
                className="contacts__item-photo"
                src={matveev}
                alt="Maria Matveev"
              />
              <div className="contacts__item-text-wrapper">
                <h3 className="contacts__title">
                  {translations[lang].contactsMatveevName}
                </h3>
                <span className="contacts__subtitle">
                  {translations[lang].contactsMatveevRole}
                </span>
                <div className="contacts__links">
                  <a
                    href="https://t.me/matveev_psy"
                    target="_blank"
                    className="contacts__link"
                    rel="noreferrer"
                  >
                    <img
                      className="contacts__link-icon"
                      src={telegram}
                      alt="telegram icon"
                    />{" "}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/matveevpsy"
                    target="_blank"
                    className="contacts__link"
                    rel="noreferrer"
                  >
                    <img
                      className="contacts__link-icon"
                      src={linkedin}
                      alt="linkedin icon"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="contacts__item">
              <img
                className="contacts__item-photo"
                src={rozovski}
                alt="Iliya Rozovsky"
              />
              <div className="contacts__item-text-wrapper">
                <h3 className="contacts__title">
                  {translations[lang].contactsRozovskiName}
                </h3>
                <span className="contacts__subtitle">
                  {translations[lang].contactsRozovskiRole}
                </span>
                <a
                  href="https://t.me/rozovskiy"
                  target="_blank"
                  className="contacts__link"
                  rel="noreferrer"
                >
                  <img
                    className="contacts__link-icon"
                    src={telegram}
                    alt="telegram icon"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
          <p className="content__text contacts__text">
            {translations[lang].contactsText}
          </p>
        </div>
        <div className="contacts__address">
          <h2 className="content__title">
            {translations[lang].contactsAddressTitle}
          </h2>
          <p className="content__text contacts__adress-text">
            {translations[lang].contactsAddress}
          </p>
        </div>
      </div>
      <div className="next-button__container">
        <p className="content__text">{translations[lang].turnBackButton}</p>
        <Link
          className="next-button back-button back-button_blue"
          onClick={handleClick}
          to=""
        >
          <img
            className="next-button__icon"
            src={arrowPath}
            alt="white arrow icon"
          />
          <div className="next-button__overlay back-button back-button_blue"></div>
        </Link>
      </div>
    </div>
  );
}
export default Contacts;
