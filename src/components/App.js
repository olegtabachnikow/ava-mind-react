import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import {
  TranslationContext,
  translations,
} from "../contexts/translationContext";
import "../css/App.css";
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
import Popup from "./Popup";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [lang, setLang] = React.useState("en");
  const [currentUserName, setCurrentUserName] = React.useState("");
  const [currentUserJob, setCurrentUserJob] = React.useState("");
  const [currentUserConditions, setCurrentUserConditions] = React.useState("");
  const [currentPersonalCondition, setCurrentPersonalCondition] =
    React.useState("");
  const [currentUserMail, setCurrentUserMail] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(true);
  const [isSent, setIsSent] = React.useState(false);
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  React.useEffect(() => {
    setLang(lang);
  },[lang]);

  React.useEffect(()=> {
    setTimeout(() => {
      setIsHidden(false);
    }, 5000);
  })

  function handleOpenPopup(data) {
    setIsPopupOpened(data);
  }
  function handleSend(data) {
    setIsSent(data);
  }
  function handleActiveStance(data) {
    setIsActive(data);
  }
  const currentUserData = {
    name: currentUserName,
    job: currentUserJob,
    stances: currentUserConditions,
    userStance: currentPersonalCondition,
    email: currentUserMail,
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

  function handleCurrentLanguage(data) {
    setLang(data);
  }

  return (
    <div className="page">
      <TranslationContext.Provider value={translations[lang]}>
        <HashRouter>
        <ScrollToTop/>
        <Popup onLang={handleCurrentLanguage} isPopupOpened={isPopupOpened} currentLanguage={lang} onClose={handleOpenPopup}/>
          <Header isHidden={isHidden} handlePopup={handleOpenPopup} isPopupOpened={isPopupOpened}>
            <LanguageChange
              onLang={handleCurrentLanguage}
            />
          </Header>
          <Section>
            <Routes>
              <Route
                path="/"
                element={<Preloader />}
              />
              <Route
                path="/intro"
                element={<Intro lang={lang} onUser={handleUserName} />}
              />
              <Route
                path="/greetings"
                element={
                  <Greetings
                    lang={lang}
                    currentUser={currentUserName}
                    onUser={handleUserJob}
                  />
                }
              />
              <Route
                path="/condition"
                element={<Condition lang={lang} onUser={handleUserCondition} />}
              />
              <Route
                path="/mail"
                element={
                  <Mail
                    lang={lang}
                    currentUser={currentUserName}
                    onUser={handleUserMail}
                    data={currentUserData}
                  />
                }
              />
              <Route
                path="/thanks"
                element={<Thanks lang={lang} currentUser={currentUserData} isSent={isSent} handleDataSend={handleSend}/>}
              />
              <Route
                path="/video"
                element={<Video lang={lang} currentUser={currentUserName} />}
              />
              <Route
                path="/contacts"
                element={
                  <Contacts lang={lang} setActiveStance={handleActiveStance} />
                }
              />
            </Routes>
          </Section>
          <Footer lang={lang} isActive={isActive} isHidden={isHidden} />
        </HashRouter>
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
