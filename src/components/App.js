import React from "react";
import "./App.css";
import {
  TranslationContext,
  translations,
} from "../contexts/translationContext";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import styled from 'styled-components';
import background1 from '../assets/images/background-1.jpg';
import { Routes,  Route,  Link,  Outlet } from 'react-router-dom';
import {sections} from '../data/section-data';

function App() {
  const [lang, setLang] = React.useState("ru");
  
  return (
    
    <Page style={{background: `url(${background1})`}}>
      <TranslationContext.Provider value={translations[lang]}>
        <Header /> 
        <Routes>
          <Route path="/" 
          element={<Section header={sections.name.header} text={sections.name.text} 
          label={sections.name.label} placeholder={sections.name.placeholder} link={sections.name.link} />} />
          <Route path="occupation" 
          element={<Section header={sections.occupation.header} text={sections.occupation.text} 
          label={sections.occupation.label} placeholder={sections.occupation.placeholder} link={sections.occupation.link} />} />        
      </Routes> 
      <Footer />
      </TranslationContext.Provider>
    </Page>
    
  );
}

export default App;

const Page = styled.div`  
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  `