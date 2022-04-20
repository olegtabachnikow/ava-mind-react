import { translations } from "../contexts/translationContext";
import { Link } from "react-router-dom";
import arrowPath from "../assets/svg/arrow.svg";
import '../css/Content.css';
import '../css/Thanks.css';
import telegram from "../assets/svg/contacts_telegram.svg";

function Thanks({ lang, currentUser}) {
  return (
    <div className="thanks content">
      <p className="content__text">
        {translations[lang].thanksTextStart}
        <span className="user-name">{currentUser}</span>
        {translations[lang].thanksTextMiddle} {" "}
              <a
                className="content__link"
                href="#team"
              >
                {translations[lang].thanksTeamLink}
              </a>
              ,{" "}
              <a
                className="content__link"
                href="https://drive.google.com/file/d/1pJOOJldevCgjPEjIRQGN4d_tk-xf_SoR/view"
                target="_blank" rel="noreferrer"
              >
                {translations[lang].thanksPresentationLink}
              </a>{" "}
              {translations[lang].thanksBot}{" "}
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
              .<br />
              {translations[lang].thanksTextEnd}
      </p>   
      <div className="next-button__container">
        <Link className="next-button" to="/video">
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
export default Thanks;