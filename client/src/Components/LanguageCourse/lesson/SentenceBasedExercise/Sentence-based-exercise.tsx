import React, { useState, useEffect, useRef } from "react";
import { exerciseData } from "../../../../data/exerciseData";
import {
  SentenceBasedExerciseContainer,
  BoxContainer,
  OptionButton,
  SubmitButton,
} from "./style-SentenceBasedExercise";
const SentenceBasedExercise = ({ handleNext }) => {
  // State to store the user's answers
  const [answers, setAnswers] = useState(Array(exerciseData.length).fill(""));

  // State to store the score
  const [score, setScore] = useState(0);

  // State to control whether to show the answers or not
  const [showAnswers, setShowAnswers] = useState(false);

  // Function to handle option selection
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
    <SentenceBasedExerciseContainer>
      {" "}
      <h2>Choisissez la bonne réponse.</h2>
      <BoxContainer>
        {/* Render each question */}
        {exerciseData.map((question, index) => {
          // Find the index of the underscore in the question
          const underscoreIndex = question.question.indexOf("_");
          // Split the question into before and after the underscore
          const beforeUnderscore = question.question.slice(0, underscoreIndex);
          const afterUnderscore = question.question.slice(underscoreIndex + 5);

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
                      backgroundColor={
                        showAnswers && answers[index] === option
                          ? question.correctAnswer === option
                            ? "rgb(118, 253, 40)"
                            : "red"
                          : answers[index] === option
                          ? "rgb(253, 253, 40)"
                          : "initial"
                      }
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
      {/* Submit button */}
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      {/* Display score and answers after submission */}
      {showAnswers && (
        <div>
          <p>Score: {score}</p>
        </div>
      )}
    </SentenceBasedExerciseContainer>
  );
};

export default SentenceBasedExercise;
