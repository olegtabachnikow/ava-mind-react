import React from "react";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import { translations } from "../contexts/translationContext";
import '../css/Content.css';

function Greetings({ lang, onUser, currentUser }) {
  const [userJob, setUserJob] = React.useState('');
  function handleChange(evt) {
    setUserJob(evt.target.value);
  }
  function handleClick() {
    onUser(userJob);
  }
  return (
    <div className="greetings content">
      <h2 className="content__title">
        {translations[lang].greetingsTitle}
        <span className="user-name">{currentUser}</span>
        {translations[lang].exclamation}
      </h2>
      <p className="content__text">{translations[lang].greetingsText}</p>
      <form action="#">
        <div className="content__input-wrapper content__input-wrapper_type_intro">
          <h3 className="content__form-question">
            {translations[lang].greetingsQuestion}
          </h3>
          <input
          value={userJob}
          onChange={handleChange}
            className="content__form-input"
            type="text"
            placeholder={translations[lang].greetingsPlaceholder}
            required
            minLength={2}
          ></input>
        </div>
      </form>
      <div className="next-button__container">
        <Link onClick={handleClick}className="next-button" to="/condition">
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
export default Greetings;
