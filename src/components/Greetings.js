import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import { translations } from "../contexts/translationContext";
import bg2 from "../assets/images/background-2.png";
import "../css/Content.css";
import "../css/Greetings.css";

function Greetings({ lang, onUser, currentUser, handleBackground }) {
  const [isActive, setIsActive] = React.useState(false);
  const [isValid, setIsValid] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onUser(data.job);
    navigate("/condition");
  };
  React.useEffect(() => {
    if (window.sessionStorage.getItem("name") == null) {
      navigate("/");
    }
    handleBackground(bg2);
  }, [navigate, currentUser, handleBackground]);
  function handleValidity(evt) {
    evt.target.value === "" ? setIsActive(false) : setIsActive(true); 
    evt.target.validity.valid ? setIsValid(true) : setIsValid(false);
    setErrorMessage(evt.target.validationMessage);
  }
  return (
    <div className="greetings content">
      <h2 className="content__title">
        <span className="user-name">{currentUser}</span>
        {translations[lang].exclamation}
      </h2>
      <p className="content__text">{translations[lang].greetingsText}</p>
      <form id="userJobForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="content__input-wrapper">
          <h3 className="content__text">
          {translations[lang].greetingsQuestion}
          </h3>
          <div className="content__form-input-container">
          <input
            className="content__form-input"
            type="text"
            required
            minLength={2}
            {...register("job", { onChange: handleValidity})}
          />
          <span className={`content__form-input-label ${isActive && "content__form-input-label_active"}`}>{translations[lang].greetingsPlaceholder}</span>
          {!isValid ? <span className="content__form-input-error">{errorMessage}</span> : null }
          </div>
        </div>
      </form>
      <div className="next-button__container">
        <div className="next-button__container">
          <button form="userJobForm" className="next-button">
            <img
              className="next-button__icon"
              src={arrowPath}
              alt="white arrow icon"
            />
            <div className="next-button__overlay"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Greetings;
