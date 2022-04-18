import { translations } from "../contexts/translationContext";
import '../css/Content.css';

function Intro({ lang }) {
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
            className="content__form-input"
            type="text"
            placeholder={translations[lang].introPlaceholder}
          ></input>
        </div>
      </form>
    </div>
  );
}
export default Intro;
