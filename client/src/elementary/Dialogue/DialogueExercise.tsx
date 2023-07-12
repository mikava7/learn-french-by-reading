import React, { useState, useEffect, useRef } from "react";
import { elementaryData } from "../elementary";
import styled from "styled-components";

import {
  SentenceBasedExerciseContainer,
  BoxContainer,
  OptionButton,
  SubmitButton,
  Continue,
} from "./style-dialogue";

const DialogueExercise = () => {
  const phrases = elementaryData[0].dialogueExercise;

  const [answers, setAnswers] = useState(Array(phrases.length).fill(""));
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = phrases.map((correct) => correct.correctAnswer);
  const checkAnswers = correctAnswers.join(",") === answers.join(",");

  // Function to handle option selection
  const handleOptionSelect = (questionIndex, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    phrases.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setShowAnswers(true);
  };

  const handleRetry = () => {
    setAnswers(Array(phrases.length).fill(""));
    setShowAnswers(false);
    setScore(0);
  };

  return (
    <SentenceBasedExerciseContainer>
      <h2>Choisissez la bonne réponse.</h2>
      <BoxContainer>
        {/* Render each question */}
        {phrases.map((question, index) => {
          // Find the index of the underscore in the question
          const underscoreIndex = question.message.indexOf("_");
          // Split the question into before and after the underscore
          const beforeUnderscore = question.message.slice(0, underscoreIndex);
          const afterUnderscore = question.message.slice(underscoreIndex + 5);

          // Create a ref to measure the width of the container
          const containerRef = useRef(null);
          // State to store the position percentage of the underscore
          const [positionPercentage, setPositionPercentage] = useState(0);

          useEffect(() => {
            // Measure the width of the text before the underscore
            const containerWidth = containerRef.current.offsetWidth;
            const beforeUnderscoreWidth = measureTextWidth(beforeUnderscore);

            // Calculate the position percentage based on the widths
            const position = (beforeUnderscoreWidth / containerWidth) * 100 + 2;
            setPositionPercentage(position);
          }, []);

          // Helper function to measure the width of the text
          const measureTextWidth = (text) => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            const width = context.measureText(text).width;
            canvas.remove();
            return width;
          };

          return (
            <div key={index} ref={containerRef}>
              <p>
                {/* Render the text before the underscore */}
                {index + 1}: {beforeUnderscore}
                {/* Render the options within the underscore */}
                <span style={{ textDecoration: "underline" }}>
                  {question.options.map((option, optionIndex) => (
                    <OptionButton
                      key={optionIndex}
                      onClick={() => handleOptionSelect(index, option)}
                      style={{
                        backgroundColor:
                          showAnswers && answers[index] === option
                            ? question.correctAnswer === option
                              ? "rgb(118, 253, 40)"
                              : "red"
                            : answers[index] === option
                            ? "rgb(253, 253, 40)"
                            : "initial",
                        pointerEvents: answers[index] !== "" ? "none" : "auto",
                      }}
                      disabled={answers[index] !== ""}
                    >
                      {option}
                    </OptionButton>
                  ))}
                </span>
                {/* Render the text after the underscore */}
                {afterUnderscore}
              </p>
            </div>
          );
        })}
      </BoxContainer>
      {/* Submit or Retry button */}
      <div onClick={showAnswers ? handleRetry : handleSubmit}>
        {showAnswers ? (
          <Continue onClick={handleRetry}>Retry</Continue>
        ) : (
          <Continue onClick={handleSubmit}>
            {checkAnswers ? "Continue" : "Submit"}
          </Continue>
        )}
      </div>
      {/* Display score and congratulations message */}
      {showAnswers && (
        <BoxContainer>
          <p>Score: {score}</p>
          {score === phrases.length && <p>Good job!</p>}
        </BoxContainer>
      )}
    </SentenceBasedExerciseContainer>
  );
};

export default DialogueExercise;
