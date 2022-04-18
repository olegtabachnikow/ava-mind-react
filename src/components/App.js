import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  TranslationContext,
  translations,
} from "../contexts/translationContext";
import Header from "./Header";
import LanguageChange from "./LanguageChange";
import Section from "./Section";
import Intro from "./Intro";
import Greetings from "./Greetings";
import Footer from "./Footer";
import '../css/App.css';

function App() {
  const [lang, setLang] = React.useState("ru");
  function handleCurrentLanguage(current) {
    setLang(current);
  }
  return (
    <div className="page">
      <TranslationContext.Provider value={translations[lang]}>
        <BrowserRouter>
          <Header>
            <LanguageChange
              onChange={handleCurrentLanguage}
              currentLang={translations[lang].currentLang}
            />
          </Header>
          <Section>
            <Routes>
              <Route path="/" element={<Intro lang={lang} />} />
              <Route path="/greetings" element={<Greetings lang={lang} />} />
            </Routes>
          </Section>
          <Footer lang={lang} />
        </BrowserRouter>
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
