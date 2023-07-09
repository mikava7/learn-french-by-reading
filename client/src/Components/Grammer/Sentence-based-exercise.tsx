import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { exerciseData } from "../../data/exerciseData";

const SentenceBasedExercise = () => {
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
    <Container>
      {" "}
      <h2>Choisissez la bonne réponse.</h2>
      <SentenceBasedExerciseContainer>
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
                    <Button
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
                    </Button>
                  ))}
                </span>
                {/* Render the text after the underscore */}
                {afterUnderscore}
              </p>
            </div>
          );
        })}
      </SentenceBasedExerciseContainer>
      {/* Submit button */}
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      {/* Display score and answers after submission */}
      {showAnswers && (
        <div>
          <p>Score: {score}</p>
        </div>
      )}
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center; /* Center align the h2 element */
  }
`;
const SentenceBasedExerciseContainer = styled.div`
  border: 2px solid rgb(219, 255, 161);

  border-radius: 6px;
  padding: 2rem;
  padding-left: 3rem;

  display: grid;
  grid-template-columns: 45% 45%;

  gap: 1rem 2rem;
  background-color: rgb(191, 243, 107);

  div {
    padding: 0.5rem;
    margin-bottom: 0.4rem;

    position: relative;
    border-radius: 12px;
    background-color: rgb(219, 255, 161);
    /* border: 2px solid grey; */
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  font-size: 1rem;
  padding: 4px 6px;
  cursor: pointer;
  gap: 1rem;
  color: black;
  &:first-child {
    margin-right: 0.6rem;
  }
  &:hover {
    transform: scale(1.2);
    background-color: rgb(253, 253, 40);
    color: rgb(40, 175, 253);
  }
`;
const SubmitButton = styled.button`
  margin-top: 1rem;
  margin-left: auto; /* Add this line */
  padding: 1rem;
  font-size: 1.1rem;
  width: 8rem;
  background-color: rgb(253, 253, 40);
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  &:hover {
    background-color: rgb(107, 253, 40);
    color: ${(props) => props.theme.colors.text2};
  }
`;

export default SentenceBasedExercise;
