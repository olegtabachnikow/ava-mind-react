import React from "react";
import { translations } from "../contexts/translationContext";
import '../css/Contacts.css';
import telegram from "../assets/svg/contacts_telegram.svg";
import linkedin from "../assets/svg/contacts_likedin.svg";
import zeldin from "../assets/images/zeldin.png";
import zirenka from "../assets/images/zirenka.png";
import rozovski from "../assets/images/rozovski.png";

function Contacts({ lang, onUser }) {
  
  return (
    <div className="contacts">
      <div className="contacts__wrapper">
        <h2 className="content__title">{translations[lang].contactsTitle}</h2>
        <div className="section-team__content">
                <div className="section-team__item">
                  <img
                    className="section-team__item-photo"
                    src={zeldin}
                    alt="Misha Zeldin"
                  />
                  <div className="section-team__item-text-wrapper">
                    <h3 className="section-item__title">
                      {translations[lang].contactsZeldinName}
                    </h3>
                    <span className="section__item-subtitle">
                      {translations[lang].contactsZeldinRole}
                    </span>
                    <div className="contacts__link">
                      <a
                        href="https://t.me/zeldinml "
                        target="_blank"
                        className="section__item-link" rel="noreferrer"
                      >
                        <img
                          className="section__item-link-icon"
                          src={telegram}
                          alt="telegram icon"
                        />{" "}
                        
                      </a>
                      <a
                        href="https://www.linkedin.com/in/zeldinml"
                        target="_blank"
                        className="section__item-link" rel="noreferrer"
                      >
                        <img
                          className="section__item-link-icon"
                          src={linkedin}
                          alt="linkedin icon"
                        />{" "}
                        
                      </a>
                    </div>
                  </div>
                </div>
                <div className="section-team__item">
                  <img
                    className="section-team__item-photo"
                    src={zirenka}
                    alt="Maria Zirenko"
                  />
                  <div className="section-team__item-text-wrapper">
                    <h3 className="section-item__title">
                      {translations[lang].contactsZirenkoName}
                    </h3>
                    <span className="section__item-subtitle">
                      {translations[lang].contactsZirenkoRole}
                    </span>
                    <a
                      href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D1%8F-%D0%B7%D0%B8%D1%80%D0%B5%D0%BD%D0%BA%D0%BE-abb609132/?challengeId=AQEh7t15Lb2jDgAAAX-3TuxEUyblG8nfWju_5-4GgQ5cg0hE7wAUBDLLnt2EAImOLAo1Lqj8-NzWBlHPjZcWZ3zGHTa_TuLCpA&submissionId=031301f6-cf0a-df16-f221-81c60dd6a41b"
                      target="_blank"
                      className="section__item-link" rel="noreferrer"
                    >
                      <img
                        className="section__item-link-icon"
                        src={linkedin}
                        alt="linkedin icon"
                      />{" "}
                      
                    </a>
                  </div>
                </div>
                <div className="section-team__item">
                  <img
                    className="section-team__item-photo"
                    src={rozovski}
                    alt="Iliya Rozovsky"
                  />
                  <div className="section-team__item-text-wrapper">
                    <h3 className="section-item__title">
                      {translations[lang].contactsRozovskiName}
                    </h3>
                    <span className="section__item-subtitle">
                      {translations[lang].contactsRozovskiRole}
                    </span>
                    <a
                      href="https://t.me/rozovskiy"
                      target="_blank"
                      className="section__item-link" rel="noreferrer"
                    >
                      <img
                        className="section__item-link-icon"
                        src={telegram}
                        alt="telegram icon"
                      />{" "}
                      
                    </a>
                  </div>
                </div>
              </div>
              <p className="section__text section__text_type_team">
                  {translations[lang].contactsText}
              </p>
      </div>
      <div className="contacts__address">
        <p className="section__text section__text_type_team">
            {translations[lang].contactsAddressTitle}
        </p>
        <p className="section__text section__text_type_team">
            {translations[lang].contactsAddress}
        </p>
      </div>            
    </div>
  );
}
export default Contacts;
