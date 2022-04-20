import { translations } from "../contexts/translationContext";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import '../css/Content.css';
import '../css/Mail.css';
import telegram from "../assets/svg/contacts_telegram.svg";

function Mail({ lang, currentUser }) {
  return (
    <div className="mail content">
      <p className="content__text">
        <span className="user-name">{currentUser}</span>
        {translations[lang].mailTextStart}
              {" "}
              <a
                className="content__link"
                href="https://t.me/ava_mind_bot"
                target="_blank" rel="noreferrer"
              >
                <img
                  className="content__link-icon"
                  src={telegram}
                  alt="telegram icon"
                />{" "}
                {translations[lang].botLink}
              </a>
              {translations[lang].mailTextEnd}
        </p>
      <form action="#">
        <div className="content__input-wrapper content__input-wrapper_type_intro">
          <input
            className="content__form-input email-form-input"
            type="email"
            required
            placeholder={translations[lang].mailPlaceholder}
          ></input>
          <span className="content__error-message"></span>
        </div>
      </form>
      <div className="next-button__container">
        <Link className="next-button" to="/thanks">
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
export default Mail;