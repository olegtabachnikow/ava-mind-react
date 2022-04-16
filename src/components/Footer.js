import styled from 'styled-components';
import presentation from '../assets/svg/presentation.svg';
import contacts from '../assets/svg/contacts.svg';
import telegram from '../assets/svg/contacts_telegram.svg';


function Footer() {
    return <FooterWrapper>
        <FooterLinks>
            <Link>
                <img className="presentation" src={presentation} alt="ava mind presentation" />
                <p>Презентация</p>
            </Link>
            <Link>
                <img className="presentation" src={contacts} alt="ava mind presentation" />
                <p>Контакты</p>
            </Link>
            <Link>
                <img className="presentation" src={telegram} alt="ava mind presentation" />
                <p>Телеграм</p>
            </Link>
        </FooterLinks>
    </FooterWrapper>
}
export default Footer;

const FooterWrapper = styled.div`
    height: 70px;  
    padding-left: 138px;  
`

const FooterLinks = styled.div`
    max-width: 490px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Link = styled.div`
    display: flex;
    align-items: center;

        img {
            margin-right: 10px;
        }
`