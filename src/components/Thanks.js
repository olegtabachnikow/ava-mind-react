import React from "react";
import { translations } from "../contexts/translationContext";
import { Link, useNavigate } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import bg5 from "../assets/images/background-5.png";
import "../css/Content.css";
import "../css/Thanks.css";
import api from "../utils/api";

function Thanks({
  lang,
  currentUser,
  isSent,
  handleDataSend,
  handleBackground,
}) {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (window.sessionStorage.getItem("name") == null) {
      navigate("/");
    }
    handleBackground(bg5);
  });
  React.useEffect(() => {
    if (!isSent) {
      let dataToSend = JSON.stringify(currentUser);
      console.log(dataToSend);
      api
        .sendUserData(dataToSend)
        .then((res) => {
          handleDataSend(true);
          console.log(res);
        })
        .catch((err) => {
          handleDataSend(true);
          console.log(err);
        });
    } else {
      console.log("Is data sent already? " + isSent);
    }
  }, [handleDataSend, currentUser, isSent]);

  return (
    <div className="thanks content">
      <p className="content__text">{translations[lang].thanksTextStart}</p>
      <p className="content__text">
        <a
          className="content__link link_animated"
          href="https://drive.google.com/file/d/1ZBydUl-q4x7fMlHGT-KXoW5gMaLak_IO/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {translations[lang].thanksPresentationLink}
        </a>{" "}
        {translations[lang].thanksPresentationEnd}
        <a
          className="content__link link_animated"
          href="/contacts"
          rel="noreferrer"
        >
          {translations[lang].thanksContacts}
        </a>
        {translations[lang].thanksBot}{" "}
        <a
          className="content__link link_animated"
          href="https://t.me/ava_mind_bot"
          target="_blank"
          rel="noreferrer"
        >
          {translations[lang].botLink}
        </a>
        {translations[lang].thanksBotEnd}
        <br />
      </p>
      <p className="content__text">{translations[lang].thanksTextEnd}</p>
      <div className="next-button__container">
        <Link className="next-button" to="/video">
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
export default Thanks;
