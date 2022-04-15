import React from "react";
import "./App.css";
import {
  TranslationContext,
  translations,
} from "../contexts/translationContext";
import Header from "./Header";
import LanguageLinks from "./LanguageLinks";
import Section from "./Section";
import Footer from "./Footer";

function App() {
  const [lang, setLang] = React.useState("ru");
  return (
    <div className="page">
      <TranslationContext.Provider value={translations[lang]}>
        <Header>
          <LanguageLinks />
        </Header>
        <Section />
        <Footer />
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
