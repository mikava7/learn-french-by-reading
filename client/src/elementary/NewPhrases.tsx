import React, { useState, useEffect, useRef } from "react";
import { elementaryData } from "./elementary";
import styled from "styled-components";
import Listen from "../Components/Chapters/Listen";
import Bonjour from "../audio/drive-download-20230711T213315Z-001/bonjourCl.mp3";
import AuRevoir from "../audio/drive-download-20230711T213315Z-001/bonjour jaime claire.mp3";
import TuTAppellesComment from "../audio/drive-download-20230711T213315Z-001/tu t appel commen Claire.mp3";
import JeMAppelleClaire from "../audio/drive-download-20230711T213315Z-001/je mappelle Claire claire.mp3";
import Enchante from "../audio/drive-download-20230711T213315Z-001/encante Claire.mp3";
import {
  DialogueSection,
  ContinueButtonWrapper,
  PhrasesContainer,
  PhraseTranslation,
  PhrasesBox,
  OriginalPhrase,
  Phrasessection,
  FavoriteBox,
} from "./style-elementaryComponant";
import Favorite from "../Components/Chapters/Favorite";
const NewPhrases = ({ Continue, lessonsCurrentIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const phraseRef = useRef(null);
  const phrases = elementaryData[lessonsCurrentIndex].phrases;
  const handleNextPhrase = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const sounds = [
    Bonjour,
    AuRevoir,
    TuTAppellesComment,
    JeMAppelleClaire,
    Enchante,
  ];
  function playSound(index) {
    const audio = new Audio(sounds[index]);
    audio.play();
    console.log("audio", audio);
  }
  return (
    <Phrasessection onClick={handleNextPhrase}>
      <PhrasesContainer>
        {phrases.originalPhrases
          .slice(0, currentIndex + 1)
          .map((originalPhrase, index) => (
            <PhrasesBox key={`phrase-${index}`}>
              <OriginalPhrase onClick={() => playSound(index)}>
                <Listen /> <div>{originalPhrase}</div>
                <Favorite />
              </OriginalPhrase>
              {phrases.translatedPhrases[index] && (
                <PhraseTranslation>
                  {phrases.translatedPhrases[index]}
                </PhraseTranslation>
              )}
            </PhrasesBox>
          ))}
      </PhrasesContainer>
      <ContinueButtonWrapper>{Continue}</ContinueButtonWrapper>
    </Phrasessection>
  );
};

export default NewPhrases;
