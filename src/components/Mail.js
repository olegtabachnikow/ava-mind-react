import React from "react";
import { translations } from "../contexts/translationContext";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import '../css/Content.css';
import '../css/Mail.css';
import telegram from "../assets/svg/contacts_telegram.svg";

function Mail({ lang, onUser, currentUser, data }) {

  const [userMail, setUserMail] = React.useState('');

  const sendUserData = (data) => {
    return fetch("https://avamind-core.herokuapp.com/api/v1/user", {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: data,
    });
  };

  function handleUserData(data) {
    let dataToSend = JSON.stringify(data);
    console.log(dataToSend);
    sendUserData(dataToSend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(dataToSend);
  }

  function handleChange(evt) {
    setUserMail(evt.target.value);
  }
  function handleClick() {
    onUser(userMail);
    handleUserData(data);
  }

  return (
    <div className="mail content">
      <p className="content__text">
        <span className="user-name">{currentUser}</span>
        {translations[lang].mailTextStart}
              {" "}
              <a
                className="content__link"
                href="https://t.me/ava_mind_bot"
                target="_blank" rel="noreferrer"
              >
                {translations[lang].botLink}
              </a>
              {translations[lang].mailTextMiddle}
        </p>
        <p className="content__text">
          {translations[lang].mailTextEnd}
        </p>
      <form action="#">
        <div className="content__input-wrapper content__input-wrapper_type_intro">
          <input
            onChange={handleChange}
            className="content__form-input email-form-input"
            type="email"
            required
            placeholder={translations[lang].mailPlaceholder}
          ></input>
          <span className="content__error-message"></span>
        </div>
      </form>
      <div className="next-button__container">
        <Link className="next-button" to="/thanks" onClick={handleClick}>
          <img
            className="next-button__icon"
            src={arrowPath}
            alt="white arrow icon"
          />
          <div className="next-button__overlay"></div>
        </Link>
      </div>
    </div>
  );
}
export default Mail;