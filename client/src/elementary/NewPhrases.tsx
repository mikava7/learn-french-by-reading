import React, { useState, useEffect, useRef } from "react";
import { elementaryData } from "./elementary";
import styled from "styled-components";
import { Continue } from "./Dialogue/Dialogues";
import Listen from "../Components/Chapters/Listen";
import Bonjour from "../audio/drive-download-20230711T213315Z-001/bonjourCl.mp3";
import AuRevoir from "../audio/drive-download-20230711T213315Z-001/bonjour jaime claire.mp3";
import TuTAppellesComment from "../audio/drive-download-20230711T213315Z-001/tu t appel commen Claire.mp3";
import JeMAppelleClaire from "../audio/drive-download-20230711T213315Z-001/je mappelle Claire claire.mp3";
import Enchante from "../audio/drive-download-20230711T213315Z-001/encante Claire.mp3";

const NewPhrases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const phraseRef = useRef(null);
  const phrases = elementaryData[0].phrases;
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
    <PhraseContainer onClick={handleNextPhrase}>
      <MessageContainer>
        {phrases.originalPhrases
          .slice(0, currentIndex + 1)
          .map((originalPhrase, index) => (
            <Phrases key={`phrase-${index}`}>
              <Original onClick={() => playSound(index)}>
                <Listen /> <div>{originalPhrase}</div>
              </Original>
              {phrases.translatedPhrases[index] && (
                <Translation>{phrases.translatedPhrases[index]}</Translation>
              )}
            </Phrases>
          ))}
      </MessageContainer>
      <Continue>Continue</Continue>{" "}
    </PhraseContainer>
  );
};
const Phrases = styled.div`
  display: flex;
  color: white;
  background-color: #0c1c29;
  padding: 1rem;
  margin: 1rem;
  border-radius: 30px;
  margin-right: 3rem;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const Original = styled.div`
  width: 100%;
  height: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-right: 3rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div:last-child {
    margin-left: 0.5rem;
  }
`;
const Translation = styled.div`
  width: 40%;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-left: 2rem;
  border-radius: 30px;
  display: flex;

  align-items: center;
  justify-content: flex-start;
`;
const MessageContainer = styled.div`
  min-height: 85vh;
`;

const PhraseContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between; /* Add this */
  min-height: 90vh; /* Change height to min-height */
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 0;
  border: 2px solid grey;
  border-bottom: none;
  background-color: #ffffffb3;
`;
export default NewPhrases;
