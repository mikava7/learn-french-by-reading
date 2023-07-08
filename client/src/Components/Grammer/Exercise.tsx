import React, { useState } from "react";
import { exerciseData } from "../../data/exerciseData";
const Exercise = () => {
  const [answers, setAnswers] = useState(Array(exerciseData.length).fill(""));
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleOptionSelect = (questionIndex, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    exerciseData.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setShowAnswers(true);
  };

  return (
    <div>
      {exerciseData.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => {
            const isUserAnswer = answers[index] === option;
            const isCorrectAnswer = question.correctAnswer === option;
            const shouldHighlight = showAnswers && isUserAnswer;
            const optionStyle = {
              backgroundColor: shouldHighlight
                ? isCorrectAnswer
                  ? "green"
                  : "red"
                : isUserAnswer
                ? "orange"
                : "initial",
            };

            return (
              <button
                key={optionIndex}
                onClick={() => handleOptionSelect(index, option)}
                style={optionStyle}
                disabled={answers[index] !== ""}
              >
                {option}
              </button>
            );
          })}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {showAnswers && (
        <div>
          <p>Score: {score}</p>
          <p>Your answers:</p>
          {exerciseData.map((question, index) => (
            <p key={index}>
              {question.question} - Your answer: {answers[index]} - Correct
              answer: {question.correctAnswer}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercise;
