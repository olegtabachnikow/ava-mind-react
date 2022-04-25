import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import { translations } from "../contexts/translationContext";
import "../css/Content.css";
import "../css/Intro.css";

function Intro({ lang, onUser }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onUser(data.name);
    navigate("/greetings");
  };

  return (
    <div className="intro content">
      <h2 className="content__title">{translations[lang].introTitle}</h2>
      <p className="content__text">{translations[lang].introText}</p>
      <form
        id="userNameForm"
        action="/greetings"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="content__input-wrapper content__input-wrapper_type_intro">
          <h3 className="content__form-question">
            {translations[lang].introQuestion}
          </h3>
          <input
            className="content__form-input"
            type="text"
            placeholder={translations[lang].introPlaceholder}
            {...register("name", { required: true, minLength: 2 })}
          />
        </div>
      </form>
      <div className="next-button__container">
          <button form="userNameForm" className="next-button" to={"/greetings"}>
            <img
              className="next-button__icon"
              src={arrowPath}
              alt="white arrow icon"
            />
            <div type="submit" className="next-button__overlay"></div>
          </button>
        </div>
    </div>
  );
}
export default Intro;
