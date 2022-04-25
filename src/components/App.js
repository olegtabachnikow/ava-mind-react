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
import Thanks from "./Thanks";
import Video from "./Video";
import Footer from "./Footer";
import Contacts from "./Contacts";


function App() {
  const [lang, setLang] = React.useState("ru");
  const [currentUserName, setCurrentUserName] = React.useState('');
  const [currentUserJob, setCurrentUserJob] = React.useState('');
  const [currentUserCondition, setCurrentUserCondition] = React.useState('');
  const [currentUserMail, setCurrentUserMail] = React.useState('');
  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {
    console.log(currentUserName);
  },[currentUserName]);

  function handleActiveStance(data) {
    setIsActive(data);
  }
  const currentUserData = {
    name: currentUserName,
    job: currentUserJob,
    condition: currentUserCondition,
    email: currentUserMail
  };
 
  function handleUserName(data) {
    setCurrentUserName(data);
  }

  function handleUserJob(data) {
    setCurrentUserJob(data);
    console.log(currentUserJob);
  }

  function handleUserCondition(data) {
    setCurrentUserCondition(data);
    console.log(currentUserCondition);
  }

  function handleUserMail(data) {
    setCurrentUserMail(data);
    console.log(currentUserMail);
  }

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
              <Route path="/" element={<Intro lang={lang} onUser={handleUserName}/>} />
              <Route path="/greetings" element={<Greetings lang={lang} currentUser={currentUserName} onUser={handleUserJob} />} />
              <Route path="/condition" element={<Condition lang={lang} onUser={handleUserCondition}/>} />
              <Route path="/mail" element={<Mail lang={lang} currentUser={currentUserName} 
              onUser={handleUserMail} data={currentUserData} />} />
              <Route path="/thanks" element={<Thanks lang={lang} currentUser={currentUserName} />} />
              <Route path="/video" element={<Video lang={lang} currentUser={currentUserName}/>} />
              <Route path="/contacts" element={<Contacts lang={lang} setActiveStance={handleActiveStance}/>} />
            </Routes>
          </Section>
          <Footer lang={lang} isActive={isActive}/>
        </BrowserRouter>
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
