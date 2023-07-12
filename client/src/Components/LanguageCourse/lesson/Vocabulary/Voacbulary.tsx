import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WordCard from "../../../Vocabulary/WordCard";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../Loading/Loading";
import { getAllVocabulary } from "../../../../redux/slices/vocabularySlice";
import {
  StyledLink,
  WordCardCompletionSection,
  CompletionSection,
  StyledButton,
} from "../../../../Styles/globalStyles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Vocabulary = ({ lessonsCurrentIndex, nextButton }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const lessonsData = useSelector((state) => state.vocabulary.vocabulary || []);
  const { french, georgian, english } = useSelector(
    (state) => state.vocabulary.vocabulary || []
  );

  const isLoading = useSelector((state) => state.vocabulary.isLoading);
  const error = useSelector((state) => state.vocabulary.error);

  const [chapterComplete, setChapterComplete] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  console.log({ french, english, georgian });
  useEffect(() => {
    dispatch(getAllVocabulary(lessonsCurrentIndex));
  }, []);

  const handleNextCard = () => {
    if (currentCard < french.length - 1) {
      setCurrentCard((prevCard) => prevCard + 1);
    } else {
      setCurrentCard(currentCard);
      setChapterComplete(true);
    }
  };
  console.log("currentCard", currentCard);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error}</p>;
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

    return (
      <div>
        {french && currentCard < french.length && (
          <WordCard
            french={french && french[currentCard]}
            translation={translation && translation[currentCard]}
            onNext={handleNextCard}
            nextButton={nextButton}
            chapterComplete={chapterComplete}
          />
        )}
      </div>
    );
  };

  return <>{renderWordCards()}</>;
};

export default Vocabulary;
