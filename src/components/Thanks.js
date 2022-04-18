import { translations } from "../contexts/translationContext";
import '../css/Content.css';
import '../css/Thanks.css';
import telegram from '../assets/images/telegram-icon.png';

function Thanks({ lang }) {
  return (
    <div className="thanks content">
      <p className="content__text">
        {translations[lang].thanksTextStart}
        <span className="user-name"></span>
        {translations[lang].thanksTextMiddle} {" "}
              <a
                className="section-materials__link section-materials__link_path_team"
                href="#team"
              >
                {translations[lang].thanksTeamLink}
              </a>
              ,{" "}
              <a
                className="section-materials__link"
                href="https://drive.google.com/file/d/1pJOOJldevCgjPEjIRQGN4d_tk-xf_SoR/view"
                target="_blank" rel="noreferrer"
              >
                {translations[lang].thanksPresentationLink}
              </a>{" "}
              {translations[lang].thanksBot}{" "}
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
                {translations[lang].botLink}
              </a>
              .<br />
              {translations[lang].thanksTextEnd}
      </p>      
    </div>
  );
}
export default Thanks;