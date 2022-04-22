import React from "react";
import { translations } from "../contexts/translationContext";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import Checkbox from "./Checkbox";
import '../css/Content.css';
import '../css/Condition.css';


function Condition({ lang, onUser }) {

  const [userCondition, setUserCondition] = React.useState('');
  function handleChange(evt) {
    setUserCondition(evt.target.value);
  }
  function handleClick() {
    onUser(userCondition);
  }

  return (
    <div className="condition content">
      <h2 className="content__title">
          {translations[lang].conditionTitle}
      </h2>
      <p className="content__text">{translations[lang].conditionText}</p>
      <form action="#">
        <div className="condition__checkbox-wrapper">
            <Checkbox value={translations[lang].conditionFear} />
            <Checkbox value={translations[lang].conditionTired} />
            <Checkbox value={translations[lang].conditionBad} />
            <Checkbox value={translations[lang].conditionTerrible} />
            <Checkbox value={translations[lang].conditionConfusion} />
            <Checkbox value={translations[lang].conditionAnxiety} />
            <Checkbox value={translations[lang].conditionPanic} />
            <Checkbox value={translations[lang].conditionProgress} />
            <Checkbox value={translations[lang].conditionUnderstand} />
            <Checkbox value={translations[lang].conditionRelationship} />
            <Checkbox value={translations[lang].conditionProductivity} />  
            <Checkbox value={translations[lang].conditionColleagues} />                    
        </div>
        <div className="content__input-wrapper">
          <h3 className="content__form-question">
            {translations[lang].conditionQuestion}
          </h3>
          <input
            onChange={handleChange}
            className="content__form-input"
            type="text"
            placeholder={translations[lang].conditionPlaceholder}
          ></input>
        </div>
      </form>
      <div className="next-button__container">
        <Link className="next-button" to="/mail" onClick={handleClick}>
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
export default Condition;