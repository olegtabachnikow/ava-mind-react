import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { translations } from "../contexts/translationContext";
import arrowPath from "../assets/svg/arrow.svg";
import bg4 from "../assets/images/background-4.png";
import "../css/Content.css";
import "../css/Mail.css";

function Mail({ lang, onUser, currentUser, handleBackground }) {
  const [isActive, setIsActive] = React.useState(false);
  const [isValid, setIsValid] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onUser(data.email);
    navigate("/thanks");
  };
  React.useEffect(() => {
    if (window.sessionStorage.getItem("name") == null) {
      navigate("/");
    }
    handleBackground(bg4);
  });
  function handleValidity(evt) {
    evt.target.value === "" ? setIsActive(false) : setIsActive(true); 
    evt.target.validity.valid ? setIsValid(true) : setIsValid(false);
    setErrorMessage(evt.target.validationMessage);
  }
  return (
    <div className="mail content">
      <p className="content__text">
        <span className="user-name">{currentUser}</span>
        {translations[lang].mailTextStart}{" "}
        <a
          className="content__link link_animated"
          href="https://t.me/ava_mind_bot"
          target="_blank"
          rel="noreferrer"
        >
          {translations[lang].botLink}
        </a>
        {translations[lang].mailTextMiddle}
      </p>
      <p className="content__text">{translations[lang].mailTextEnd}</p>
      <form id="userEmailForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="content__input-wrapper">
        <div className="content__form-input-container">
          <input
            className="content__form-input email-form-input"
            type="email"
            {...register("email", {
              onChange: handleValidity,
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          ></input>
           <span className={`content__form-input-label ${isActive && "content__form-input-label_active"}`}>{translations[lang].mailPlaceholder}</span>
          {!isValid ? <span className="content__form-input-error">{errorMessage}</span> : null }
          </div>
        </div>
      </form>
      <div className="next-button__container">
        <button form="userEmailForm" className="next-button">
          <img
            className="next-button__icon"
            src={arrowPath}
            alt="white arrow icon"
          />
          <div className="next-button__overlay"></div>
        </button>
      </div>
    </div>
  );
}
export default Mail;
