import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
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
import bg1 from "../assets/images/background-1.png";

function App() {
  const [lang, setLang] = React.useState("en");
  const [currentUserName, setCurrentUserName] = React.useState("");
  const [currentUserJob, setCurrentUserJob] = React.useState("");
  const [currentUserConditions, setCurrentUserConditions] = React.useState("");
  const [currentPersonalCondition, setCurrentPersonalCondition] =
    React.useState("");
  const [currentUserMail, setCurrentUserMail] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [background, setBackground] = React.useState(bg1);
  React.useEffect(() => {
    setLang(lang);
  }, [lang]);
  function handlePreloader(data) {
    setIsHidden(data);
  }
  function handleOpenPopup(data) {
    setIsPopupOpened(data);
  }
  function handleSend(data) {
    setIsSent(data);
  }
  function handleActiveStance(data) {
    setIsActive(data);
  }
  function handleBackground(data) {
    setBackground(data);
  }
  const currentUserData = {
    name: currentUserName,
    job: currentUserJob,
    stances: currentUserConditions,
    userStance: currentPersonalCondition,
    email: currentUserMail,
  };
  const currentSessionName = window.sessionStorage.getItem("name");
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
    <div className="page" style={{ backgroundImage: `url(${background})` }}>
      <TranslationContext.Provider value={translations[lang]}>
        <BrowserRouter>
          <ScrollToTop />
          <Popup
            onLang={handleCurrentLanguage}
            isPopupOpened={isPopupOpened}
            currentLanguage={lang}
            onClose={handleOpenPopup}
          />
          <Header
            isHidden={isHidden}
            handlePopup={handleOpenPopup}
            isPopupOpened={isPopupOpened}
          >
            <LanguageChange onLang={handleCurrentLanguage} />
          </Header>
          <Section>
            <Routes>
              <Route
                path="/"
                element={<Preloader onPreloader={handlePreloader} />}
              />
              <Route
                path="/intro"
                element={
                  <Intro
                    lang={lang}
                    onUser={handleUserName}
                    currentName={currentSessionName}
                    handleBackground={handleBackground}
                  />
                }
              />
              <Route
                path="/greetings"
                element={
                  <Greetings
                    lang={lang}
                    currentUser={currentSessionName}
                    onUser={handleUserJob}
                    handleBackground={handleBackground}
                  />
                }
              />
              <Route
                path="/condition"
                element={
                  <Condition
                    lang={lang}
                    onUser={handleUserCondition}
                    handleBackground={handleBackground}
                  />
                }
              />
              <Route
                path="/mail"
                element={
                  <Mail
                    lang={lang}
                    currentUser={currentSessionName}
                    onUser={handleUserMail}
                    data={currentUserData}
                    handleBackground={handleBackground}
                  />
                }
              />
              <Route
                path="/thanks"
                element={
                  <Thanks
                    lang={lang}
                    currentUser={currentUserData}
                    isSent={isSent}
                    handleDataSend={handleSend}
                    currentUserName={currentSessionName}
                    handleBackground={handleBackground}
                  />
                }
              />
              <Route
                path="/video"
                element={
                  <Video
                    lang={lang}
                    currentUser={currentSessionName}
                    handleBackground={handleBackground}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <Contacts
                    lang={lang}
                    setActiveStance={handleActiveStance}
                    handleBackground={handleBackground}
                  />
                }
              />
            </Routes>
          </Section>
          <Footer lang={lang} isActive={isActive} isHidden={isHidden} />
        </BrowserRouter>
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
