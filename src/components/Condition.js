import React from "react";
import { translations } from "../contexts/translationContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import bg3 from "../assets/images/background-3.png";
import Checkbox from "./Checkbox";
import "../css/Content.css";
import "../css/Condition.css";

function Condition({ lang, onUser, handleBackground }) {
  const [isActive, setIsActive] = React.useState(false);
  let conditions = [];
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onUser(data.personalCondition, conditions);
    navigate("/mail");
  };
  React.useEffect(() => {
    if (window.sessionStorage.getItem("name") == null) {
      navigate("/");
    }
    handleBackground(bg3);
  });
  function handleChange(evt) {
    if (evt.target.checked === true) {
      conditions.push(evt.target.name);
    } else if (evt.target.checked === false) {
      const result = conditions.filter(function (item) {
        return item !== evt.target.name;
      });
      conditions = result;
    }
  }
  function handleActive(evt) {
    evt.target.value === "" ? setIsActive(false) : setIsActive(true); 
  }
  return (
    <div className="condition content">
      <h2 className="content__title">{translations[lang].conditionTitle}</h2>
      <p className="content__text">{translations[lang].conditionText}</p>
      <form
        className="condition__form"
        id="userConditionsForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="condition__checkbox-wrapper">
          <Checkbox
            onChange={handleChange}
            value={translations[lang].conditionFear}
            condition={"fear"}
          />
          <Checkbox
            onChange={handleChange}
            value={translations[lang].conditionBad}
            condition={"feelsBad"}
          />
          <Checkbox
            onChange={handleChange}
            value={translations[lang].conditionTerrible}
            condition={"terribleMood"}
          />
          <Checkbox
            onChange={handleChange}
            value={translations[lang].conditionConfusion}
            condition={"confused"}
          />
          <Checkbox
            onChange={handleChange}
            value={translations[lang].conditionAnxiety}
            condition={"anxiety"}
          />
          <Checkbox
            onChange={handleChange}
            value={translations[lang].conditionPanic}
            condition={"panic"}
          />
        </div>
        <div className="content__input-wrapper">
          <h3 className="content__form-question">
            {translations[lang].conditionQuestion}
          </h3>
          <div className="content__form-input-container">
          <input
            className="content__form-input"
            type="text"
            {...register("personalCondition", { onChange: handleActive })}
          ></input>
          <span className={`content__form-input-label ${isActive && "content__form-input-label_active"}`}>{translations[lang].conditionPlaceholder}</span>
          </div>
        </div>
      </form>
      <div className="next-button__container">
        <button form="userConditionsForm" className="next-button">
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
export default Condition;
