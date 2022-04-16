import logoPath from '../assets/svg/logo.svg';
import languagesPath from '../assets/svg/language.svg';
import styled from 'styled-components';

function Header() {
   return <HeaderWrapper>
       <LogoWrapper>
            <img className="header__logo" src={logoPath} alt="ava mind logo" />
            <h1>AVAMind</h1>
       </LogoWrapper>
       <LanguageLinks>
            <p>Ru</p>
            <button className="header__button-lang" type="button">                
                <img src={languagesPath} alt="languages selection icon" />
            </button>
       </LanguageLinks>
   </HeaderWrapper>
}
export default Header;

const HeaderWrapper = styled.div`
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 78px;
    padding-right: 131px;
`

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    
        img {
            margin-right: 20px;
            width: 32px;
            height: 16px;
        }

        h1 {
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;
            margin: 0;
        }
`

const LanguageLinks = styled.div`
    display: flex;
    align-items: center;

    p {
        margin-right: 13px;
    }

    img {            
            width: 14px;
            height: 14px;
        }
`