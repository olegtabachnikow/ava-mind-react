import { translations } from "../contexts/translationContext";
import '../css/Content.css';
import '../css/Mail.css';
import telegram from '../assets/images/telegram-icon.png';

function Mail({ lang }) {
  return (
    <div className="mail content">
      <p className="content__text">
        <span className="user-name"></span>
        {translations[lang].mailTextStart}
              {" "}
              <a
                className="section-materials__link"
                href="https://t.me/ava_mind_bot"
                target="_blank" rel="noreferrer"
              >
                <img
                  className="section__link-icon"
                  src={telegram}
                  alt="telegram icon"
                />{" "}
                {translations[lang].mailBotLink}
              </a>
              {translations[lang].mailTextEnd}
        </p>
      <form action="#">
        <div className="content__input-wrapper content__input-wrapper_type_intro">
          <input
            className="content__form-input email-form-input"
            type="email"
            required
            placeholder={translations[lang].MailPlaceholder}
          ></input>
        </div>
      </form>
    </div>
  );
}
export default Mail;