import { translations } from "../contexts/translationContext";

function Greetings({ lang }) {
  return (
    <div className="greetings content">
      <h2 className="content__title">
        {translations[lang].greetingsTitle}
        <span className="user-name"></span>
        {translations[lang].exclamation}
      </h2>
      <p className="content__text">{translations[lang].greetingsText}</p>
      <form action="#">
        <div className="content__input-wrapper content__input-wrapper_type_intro">
          <h3 className="content__form-question">
            {translations[lang].greetingsQuestion}
          </h3>
          <input
            className="content__form-input"
            type="text"
            placeholder={translations[lang].greetingsPlaceholder}
          ></input>
        </div>
      </form>
    </div>
  );
}
export default Greetings;
