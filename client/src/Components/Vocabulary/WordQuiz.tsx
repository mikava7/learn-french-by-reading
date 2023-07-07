import React, { useState } from "react";
import styled from "styled-components";

const WordQuiz = ({ questions, answers, onQuizComplete, text }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    console.log("handleNextQuestion");
  };

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = answers[currentQuestion][0];
    console.log("handleAnswer");

    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      console.log("selectedAnswer === correctAnswer");
    }

    if (currentQuestion === questions.length - 1) {
      onQuizComplete();
      console.log(" onQuizComplete();");
    } else {
      handleNextQuestion();
      console.log(" handleNextQuestion");
    }
  };

  const renderQuizQuestion = () => {
    const question = questions[currentQuestion];
    console.log(" renderQuizQuestion");

    return (
      <div>
        <h3>Quiz</h3>
        <p>
          {question}
          {text}
        </p>
      </div>
    );
  };

  const renderQuizAnswers = () => {
    const shuffledAnswers = shuffleArray([...answers[currentQuestion]]);

    return (
      <div>
        <ul>
          {shuffledAnswers.map((answer, index) => (
            <li key={index}>
              <button onClick={() => handleAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <QuizContainer>
      {renderQuizQuestion()}
      {renderQuizAnswers()}
    </QuizContainer>
  );
};

const QuizContainer = styled.div``;

// Helper function to shuffle array
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default WordQuiz;
