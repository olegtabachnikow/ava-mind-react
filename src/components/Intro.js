import React from "react";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import { translations } from "../contexts/translationContext";
import '../css/Content.css';
import '../css/Intro.css';

function Intro({ lang, onUser }) {
  const [userName, setUserName] = React.useState('');
  function handleChange(evt) {
    setUserName(evt.target.value);
  }
  function handleClick() {
    onUser(userName);
  }
  return (
    <div className="intro content">
      <h2 className="content__title">{translations[lang].introTitle}</h2>
      <p className="content__text">{translations[lang].introText}</p>      
      <form action="#">
        <div className="content__input-wrapper content__input-wrapper_type_intro">
          <h3 className="content__form-question">
            {translations[lang].introQuestion}
          </h3>
          <input
          value={userName}
           onChange={handleChange}
            className="content__form-input"
            type="text"
            placeholder={translations[lang].introPlaceholder}
          ></input>
        </div>
      </form>
      <div className="next-button__container">
        <Link onClick={handleClick}className="next-button" to={(userName.length <= 2) ? "#" : "/greetings"}>
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
export default Intro;
