import styled from 'styled-components';
import { Link } from "react-router-dom";

function Section({header, text, label, placeholder, link}) {
        
    return <SectionWrapper>
        <h2>{header}</h2>
        <p>{text}</p>
        <form action='#'>
            <InputWrapper>
                <h3>{label}</h3>
                <input type="text" placeholder={placeholder}></input>
            </InputWrapper>
            <Link to={link}>Продолжить</Link>
        </form>        
    </SectionWrapper>
}

export default Section;

const SectionWrapper = styled.div`
    box-sizing: border-box;
    height: calc(100vh - 160px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 130px;

        h2 {
            margin: 0;            
            font-weight: 400;
            font-size: 36px;
            line-height: 60px;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;
        }
`


const InputWrapper = styled.form`
    display: flex;
`