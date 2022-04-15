import languagesPath from '../images/language.svg';
function LanguageLinks() {
    return <div className="header__link-container">
        <button className="header__button-lang" type="button">
            <img src={languagesPath} alt="languages selection icon" />
        </button>
    </div>
}
export default LanguageLinks;