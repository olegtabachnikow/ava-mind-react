import React from "react";
export const TranslationContext = React.createContext();

export const translations = {
  en: {
    currentLang: "En",
    introTitle: "Hello! Let’s get to know each other :)",
    introText:
      "My name is AVA, I am your personal digital angel. I will help you feel better and keep your productivity, even in difficult times.",
    introQuestion: "What’s your name?",
    introPlaceholder: "My name is...",
    footerPresentation: "Presentation",
    footerContacts: "Contacts",
    footerTelegram: "Telegram",
  },
  ru: {
    currentLang: "Ru",
    introTitle: "Привет! Давай знакомиться",
    introText:
      "Меня зовут AVA, я твой персональный цифровой ангел. Я помогу тебе чувствовать себя лучше и сохранять продуктивность, даже в тяжелое время.",
    introQuestion: "А как тебя зовут?",
    introPlaceholder: "Меня зовут...",
    footerPresentation: "Презентация",
    footerContacts: "Контакты",
    footerTelegram: "Телеграм",
  },
  uk: {
    currentLang: "Uk",
    introTitle: "Вітаю! Давай знайомитися.",
    introText:
      "Мене звати AVA, я твій персональний цифровий янгол. Я допоможу тобі почувати себе краще та зберегти продуктивність навіть в важкий час.",
    introQuestion: "Як тебе звати?",
    introPlaceholder: "Мене звати...",
    footerPresentation: "Презентація",
    footerContacts: "Контакти",
    footerTelegram: "Telegram",
  },
};
