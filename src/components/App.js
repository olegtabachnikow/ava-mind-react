import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  TranslationContext,
  translations,
} from "../contexts/translationContext";
import '../css/App.css';
import Header from "./Header";
import LanguageChange from "./LanguageChange";
import Section from "./Section";
import Intro from "./Intro";
import Greetings from "./Greetings";
import Condition from "./Condition";
import Mail from "./Mail";
import Footer from "./Footer";



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
              <Route path="/condition" element={<Condition lang={lang} />} />
              <Route path="/mail" element={<Mail lang={lang} />} />
            </Routes>
          </Section>
          <Footer lang={lang} />
        </BrowserRouter>
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
