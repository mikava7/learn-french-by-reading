import React, { useState } from "react";
import styled from "styled-components";
import WordCard from "./WordCard";
import { lessonsData } from "../../data/lessonsData";
const LessonComponent = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => prevCard + 1);
  };

  const renderWordCards = () => {
    const { words, translations } = lessonsData.lesson1;
    console.log(
      `Rendering WordCard: ${currentCard}`,
      words[currentCard],
      translations[currentCard]
    );

    return (
      <div>
        <WordCard
          word={words[currentCard]}
          translation={translations[currentCard]}
          onNext={handleNextCard}
        />

        {currentCard === words.length - 1 && (
          <div>
            <p>Lesson Completed!</p>
            <button onClick={() => setLessonCompleted(true)}>Finish</button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {currentCard < lessonsData.lesson1.words.length && !lessonCompleted ? (
        <div>
          {renderWordCards()}
          <button onClick={handleNextCard}>Next</button>
        </div>
      ) : currentCard === lessonsData.lesson1.words.length - 1 &&
        !lessonCompleted ? (
        <div>{renderWordCards()}</div>
      ) : (
        <p>You have completed the lesson.</p>
      )}
    </div>
  );
};

export default LessonComponent;
