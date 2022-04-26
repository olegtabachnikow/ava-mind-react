import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import { translations } from "../contexts/translationContext";
import '../css/Content.css';
import '../css/Greetings.css';

function Greetings({ lang, onUser, currentUser }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onUser(data.job);
    navigate("/condition");
  };
  return (
    <div className="greetings content">
      <h2 className="content__title">
        {translations[lang].greetingsTitle}
        <span className="user-name">{currentUser}</span>
        {translations[lang].exclamation}
      </h2>
      <p className="content__text">{translations[lang].greetingsText}</p>
      <form id="userJobForm"  onSubmit={handleSubmit(onSubmit)}>
        <div className="content__input-wrapper content__input-wrapper_type_greetings">
          <h3 className="content__text">
            {translations[lang].greetingsQuestion}
          </h3>
          <input
            className="content__form-input"
            type="text"
            placeholder={translations[lang].greetingsPlaceholder}
            {...register("job", { required: true, minLength: 2 })}
          ></input>
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
