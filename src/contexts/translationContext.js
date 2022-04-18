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
    greetingsTitle: "Nice to meet you, ",
    exclamation: '!',
    greetingsText: `According to etiquette, I need to tell you that I’m an artificial intelligence. Frankly, it’s not very complicated, but I'm still learning. I’ve been trained on psychological data and now I’m helping with stress, burnout and depression. That is all about me.`,
    greetingsQuestion: `Tell me about yourself. What do you do?`,
    greetingsPlaceholder: 'Occupation',
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
    greetingsTitle: 'Рада познакомиться, ',
    exclamation: '!',
    greetingsText: 'По правилам этикета, мне нужно предупредить тебя, что я – искусственный интеллект. Честно говоря, пока не очень сложный, но зато специализированный. Я обучалась на научных работах психологов и теперь помогаю решать проблемы стресса, выгорания и депрессии. Но я все о себе.',
    greetingsQuestion: `Расскажи о себе. Чем занимаешься?`,
    greetingsPlaceholder: 'Занятость',
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
    greetingsTitle: 'Радий знайомству, ',
    exclamation: '!',
    greetingsText: `За правилами етикету я повинна попередити тебе, що я - штучний інтелект. Відверто кажучи, поки що не дуже складний, але спеціалізований. Я навчалася на наукових працях психологів і тепер допомогаю вирішувати проблеми пов'язані зі стресом, емоційним вигорянням та депресією.`,
    greetingsQuestion: `Розкажи про себе. Чим займаєшся?`,
    greetingsPlaceholder: 'Зайнятість',
    footerPresentation: "Презентація",
    footerContacts: "Контакти",
    footerTelegram: "Telegram",
  },
};
