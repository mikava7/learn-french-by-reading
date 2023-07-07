import React from "react";
import TroisMus from "./TroisMus/TroisMus";
import LessonComponent from "./Vocabulary/LessonComponent";
import WordQuiz from "./Vocabulary/WordQuiz";
const Home = () => {
  const quizData = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    // Add more quiz questions
  ];
  const lessonsDataw = [
    {
      words: ["Hello", "Goodbye", "Thank you"],
      translations: ["Hola", "Adiós", "Gracias"],
      quizQuestions: [
        'How do you say "Hello"?',
        'How do you say "Goodbye"?',
        'How do you say "Thank you"?',
      ],
      quizAnswers: [
        ["Hola", "Adiós", "Gracias", "Adiós"],
        ["Hola", "Adiós", "Gracias", "Adióssd"],
        ["Holsfa", "Adiós", "Gracias", "Adióssaa"],
        ["HoThankla", "AdiThankós", "do", "Adióssassd"],
      ],
      result: "Lesson 1 Score: {score}",
    },
    // Add more lessons
  ];

  const lessonsData = {
    lesson1: {
      words: [
        "hello",
        "goodbye",
        "thank you",
        "yes",
        "no",
        "please",
        "sorry",
        "excuse me",
        "help",
        "sorry",
      ],
      translations: [
        "bonjour",
        "au revoir",
        "merci",
        "oui",
        "non",
        "s'il vous plaît",
        "pardon",
        "excusez-moi",
        "aidez-moi",
        "désolé",
      ],
    },
  };

  return (
    <div>
      <LessonComponent />
      {/* <WordQuiz /> */}
      {/* <TroisMus /> */}
    </div>
  );
};

export default Home;
