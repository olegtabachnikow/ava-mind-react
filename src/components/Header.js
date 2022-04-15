import logoPath from '../images/logo.svg';
function Header(props) {
   return <div className="header">
       <div className="header__logo-wrapper">
       <img className="header__logo" src={logoPath} alt="ava mind logo" />
       </div>
       {props.children}
   </div>
}
export default Header;