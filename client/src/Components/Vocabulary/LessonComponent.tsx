import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WordCard from "./WordCard";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { getAllVocabulary } from "../../redux/slices/vocabularySlice";
import {
  StyledLink,
  WordCardCompletionSection,
  CompletionSection,
  StyledButton,
} from "../../Styles/globalStyles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LessonComponent = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const lessonsData = useSelector((state) => state.vocabulary.vocabulary || []);
  const isLoading = useSelector((state) => state.vocabulary.isLoading);
  const error = useSelector((state) => state.vocabulary.error);

  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const currentLesson = lessonsData[lessonIndex];
  const { french, georgian, english } = currentLesson || [];
  console.log({ french, english, georgian });
  useEffect(() => {
    dispatch(getAllVocabulary());
  }, []);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => prevCard + 1);
  };

  const startOver = () => {
    setLessonIndex(0);
    setCurrentCard(0);
    setLessonCompleted(false);
  };

  const startNextLesson = () => {
    setLessonIndex((prevIndex) => prevIndex + 1);
    setCurrentCard(0);
    setLessonCompleted(false);
  };
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!currentLesson) {
    return null;
  }
  const renderWordCards = () => {
    let translation;

    if (i18n.language === "ka") {
      translation = georgian;
    } else if (i18n.language === "en") {
      translation = english;
    } else if (i18n.language === "fr") {
      translation = english;
    }
    const frenchLength = french.length;
    console.log("frenchLength", frenchLength);
    console.log("currentCard", currentCard);

    return (
      <div>
        {!lessonCompleted && currentCard < french.length ? (
          <WordCard
            french={french && french[currentCard]}
            translation={translation && translation[currentCard]}
            onNext={handleNextCard}
          />
        ) : (
          <WordCardCompletionSection>
            <p>{t("Vous avez terminé la leçon")}</p>
            <h2>{t("Voulez-vous recommencer?")}</h2>
            <CompletionSection>
              <button onClick={startOver}>{t("Oui")}</button>
              <Link to="/">
                <button>{t("No")}</button>
              </Link>
              <button onClick={startNextLesson}>{t("Suivante")}</button>
            </CompletionSection>
          </WordCardCompletionSection>
        )}
      </div>
    );
  };

  return <>{renderWordCards()}</>;
};

export default LessonComponent;
