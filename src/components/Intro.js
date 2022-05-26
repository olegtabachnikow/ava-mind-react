import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import bg1 from "../assets/images/background-1.png";
import { translations } from "../contexts/translationContext";
import "../css/Content.css";
import "../css/Intro.css";

function Intro({ lang, onUser, currentName, handleBackground }) {
  const [isActive, setIsActive] = React.useState(false);
  const [isValid, setIsValid] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onUser(data.name);
    window.sessionStorage.setItem("name", data.name);
    navigate("/greetings");
  };
  React.useEffect(() => {
    if (window.sessionStorage.getItem("name") == null) {
      navigate("/intro");
    }
    currentName !== null && setIsActive(true);
    handleBackground(bg1);
  }, [navigate, handleBackground, currentName]);
  function handleValidity(evt) {
    evt.target.value === "" ? setIsActive(false) : setIsActive(true); 
    evt.target.validity.valid ? setIsValid(true) : setIsValid(false);
    setErrorMessage(evt.target.validationMessage);
  }
  return (
    <div className="intro content">
      <h2 className="content__title">{translations[lang].introTitle}</h2>
      <p className="content__text">{translations[lang].introText}</p>
      <form id="userNameForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="content__input-wrapper">
          <h3 className="content__form-question">
            {translations[lang].introQuestion}
          </h3>
          <div className="content__form-input-container">
          <input
            className="content__form-input"
            type="text"
            defaultValue={currentName}
            required
            minLength={2}
            {...register("name", { onChange: handleValidity})}
          />
          <span className={`content__form-input-label ${isActive && "content__form-input-label_active"}`}>{translations[lang].introPlaceholder}</span>
          {!isValid ? <span className="content__form-input-error">{errorMessage}</span> : null }
          </div>
        </div>
      </form>
      <div className="next-button__container">
        <button form="userNameForm" className="next-button">
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
export default Intro;
