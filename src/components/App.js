import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  TranslationContext,
  translations,
} from "../contexts/translationContext";
import '../css/App.css';
import Preloader from "./Preloader";
import Header from "./Header";
import LanguageChange from "./LanguageChange";
import Section from "./Section";
import Intro from "./Intro";
import Greetings from "./Greetings";
import Condition from "./Condition";
import Mail from "./Mail";
import Thanks from "./Thanks";
import Video from "./Video";
import Footer from "./Footer";
import Contacts from "./Contacts";


function App() {
  const [lang, setLang] = React.useState("ru");
  const [currentUserName, setCurrentUserName] = React.useState('');
  const [currentUserJob, setCurrentUserJob] = React.useState('');
  const [currentUserConditions, setCurrentUserConditions] = React.useState('');
  const [currentPersonalCondition, setCurrentPersonalCondition] = React.useState('');
  const [currentUserMail, setCurrentUserMail] = React.useState('');
  const [isActive, setIsActive] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(true);
  function handleActiveStance(data) {
    setIsActive(data);
  }
  function handleHiddenComponent() {
    setIsHidden(false);
  }
  const currentUserData = {
    name: currentUserName,
    job: currentUserJob,
    conditions: currentUserConditions,
    userCondition: currentPersonalCondition,
    email: currentUserMail
  };
 
  function handleUserName(data) {
    setCurrentUserName(data);
  }

  function handleUserJob(data) {
    setCurrentUserJob(data);
  }

  function handleUserCondition(data, conditions) {
    setCurrentUserConditions(conditions);
    setCurrentPersonalCondition(data);
  }

  function handleUserMail(data) {
    setCurrentUserMail(data);
  }

  function handleCurrentLanguage(current) {
    setLang(current);
  }

  return (
    <div className="page">
      <TranslationContext.Provider value={translations[lang]}>
        <BrowserRouter>
          <Header isHidden={isHidden}>
            <LanguageChange
              onChange={handleCurrentLanguage}
              currentLang={translations[lang].currentLang}
            />
          </Header>
          <Section>
            <Routes>
            <Route path="/" element={<Preloader onHide={handleHiddenComponent}/>} />
              <Route path="/intro" element={<Intro lang={lang} onUser={handleUserName}/>} />
              <Route path="/greetings" element={<Greetings lang={lang} currentUser={currentUserName} onUser={handleUserJob} />} />
              <Route path="/condition" element={<Condition lang={lang} onUser={handleUserCondition}/>} />
              <Route path="/mail" element={<Mail lang={lang} currentUser={currentUserName} 
              onUser={handleUserMail} data={currentUserData} />} />
              <Route path="/thanks" element={<Thanks lang={lang} currentUser={currentUserData} />} />
              <Route path="/video" element={<Video lang={lang} currentUser={currentUserName}/>} />
              <Route path="/contacts" element={<Contacts lang={lang} setActiveStance={handleActiveStance}/>} />
            </Routes>
          </Section>
          <Footer lang={lang} isActive={isActive} isHidden={isHidden}/>
        </BrowserRouter>
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
