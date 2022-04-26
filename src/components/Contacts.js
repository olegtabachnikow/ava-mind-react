import React from "react";
import { useNavigate } from "react-router-dom";
import { translations } from "../contexts/translationContext";
import '../css/Contacts.css';
import telegram from "../assets/svg/contacts_telegram.svg";
import linkedin from "../assets/svg/contacts_likedin.svg";
import zeldin from "../assets/images/zeldin.png";
import zirenka from "../assets/images/zirenka.png";
import rozovski from "../assets/images/rozovski.png";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow_back.svg";

function Contacts({ lang, setActiveStance }) {
  function handleActiveLink(data) {
    setActiveStance(data);
  }
  React.useEffect(()=> {
    handleActiveLink(true);
    return () => handleActiveLink(false);
  },[])
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <>
    <div className="contacts">
      <div className="contacts__wrapper">
        <h2 className="content__title">{translations[lang].contactsTitle}</h2>
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
                        className="contacts__link" rel="noreferrer"
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
                        className="contacts__link" rel="noreferrer"
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
                    src={zirenka}
                    alt="Maria Zirenko"
                  />
                  <div className="contacts__item-text-wrapper">
                    <h3 className="contacts__title">
                      {translations[lang].contactsZirenkoName}
                    </h3>
                    <span className="contacts__subtitle">
                      {translations[lang].contactsZirenkoRole}
                    </span>
                    <a
                      href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D1%8F-%D0%B7%D0%B8%D1%80%D0%B5%D0%BD%D0%BA%D0%BE-abb609132/?challengeId=AQEh7t15Lb2jDgAAAX-3TuxEUyblG8nfWju_5-4GgQ5cg0hE7wAUBDLLnt2EAImOLAo1Lqj8-NzWBlHPjZcWZ3zGHTa_TuLCpA&submissionId=031301f6-cf0a-df16-f221-81c60dd6a41b"
                      target="_blank"
                      className="contacts__link" rel="noreferrer"
                    >
                      <img
                        className="contacts__link-icon"
                        src={linkedin}
                        alt="linkedin icon"
                      />{" "}
                      
                    </a>
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
                      className="contacts__link" rel="noreferrer"
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
    <p className="content__text">{translations[lang].videoBack}</p>      
    <Link className="next-button back-button" onClick={handleClick} to="">
      <img
        className="next-button__icon"
        src={arrowPath}
        alt="white arrow icon"
      />
      <div className="next-button__overlay back-button back-button_blue"></div>
    </Link>
  </div>               
  </>
  );
}
export default Contacts;
