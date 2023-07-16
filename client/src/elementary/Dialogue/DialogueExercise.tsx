import React, { useState, useEffect, useRef } from "react";
import { elementaryData } from "../elementary";
import styled from "styled-components";
import {
  DialogueExerciseBox,
  DialogueExerciseContainer,
  DialogueOptionButton,
  SubmitDialogue,
  ContinueButtonWrapper,
} from "../style-elementaryComponant";
import {
  SentenceBasedExerciseContainer,
  BoxContainer,
  OptionButton,
} from "./style-dialogue";

const DialogueExercise = ({ Continue, lessonsCurrentIndex }) => {
  const phrases = elementaryData[lessonsCurrentIndex].dialogueExercise;

  const [answers, setAnswers] = useState(Array(phrases.length).fill(""));
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(0);
  const [allAnswersCorrect, setAllAnswersCorrect] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [anyWrongAnswer, setAnyWrongAnswer] = useState(false);

  const correctAnswers = phrases.map((correct) => correct.correctAnswer);
  const checkAnswers = correctAnswers.join(",") === answers.join(",");

  const handleOptionSelect = (questionIndex, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    let wrongAnswer = false;

    phrases.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        calculatedScore++;
      } else {
        wrongAnswer = true;
      }
    });

    setScore(calculatedScore);
    setShowAnswers(true);
    setAllAnswersCorrect(calculatedScore === phrases.length);
    setAnyWrongAnswer(wrongAnswer);
    setSubmitClicked(true);
  };

  const handleRetry = () => {
    setAnswers(Array(phrases.length).fill(""));
    setShowAnswers(false);
    setScore(0);
    setAllAnswersCorrect(false);
    setAnyWrongAnswer(false);
    setSubmitClicked(false);
  };

  return (
    <DialogueExerciseContainer>
      <h2>Choisissez la bonne réponse.</h2>
      <DialogueExerciseBox>
        {phrases.map((question, index) => {
          const underscoreIndex = question.message.indexOf("_");
          const beforeUnderscore = question.message.slice(0, underscoreIndex);
          const afterUnderscore = question.message.slice(underscoreIndex + 5);

          const containerRef = useRef(null);
          const [positionPercentage, setPositionPercentage] = useState(0);

          useEffect(() => {
            const containerWidth = containerRef.current.offsetWidth;
            const beforeUnderscoreWidth = measureTextWidth(beforeUnderscore);

            const position = (beforeUnderscoreWidth / containerWidth) * 100 + 2;
            setPositionPercentage(position);
          }, []);

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
                {index + 1}: {beforeUnderscore}
                <span style={{ textDecoration: "underline" }}>
                  {question.options.map((option, optionIndex) => (
                    <DialogueOptionButton
                      key={optionIndex}
                      onClick={() => handleOptionSelect(index, option)}
                      questionCorrectAnswer={question.correctAnswer === option}
                      usersAnswer={answers[index] === option}
                      showAnswers={showAnswers && answers[index] === option}
                      allAnswersCorrect={allAnswersCorrect}
                      disabled={answers[index] !== ""}
                    >
                      {option}
                    </DialogueOptionButton>
                  ))}
                </span>
                {afterUnderscore}
              </p>
            </div>
          );
        })}
      </DialogueExerciseBox>
      <ContinueButtonWrapper>
        {showAnswers ? (
          <div onClick={handleRetry}>
            {anyWrongAnswer ? <SubmitDialogue>Retry</SubmitDialogue> : Continue}
          </div>
        ) : (
          <div onClick={handleSubmit}>
            {checkAnswers ? (
              allAnswersCorrect ? (
                Continue
              ) : (
                <SubmitDialogue>Submit</SubmitDialogue>
              )
            ) : (
              <SubmitDialogue>Submit</SubmitDialogue>
            )}
          </div>
        )}
      </ContinueButtonWrapper>

      {checkAnswers && (
        <BoxContainer>
          <p>Score: {score}</p>
          {score === phrases.length && <p>Good job!</p>}
        </BoxContainer>
      )}
    </DialogueExerciseContainer>
  );
};

export default DialogueExercise;
