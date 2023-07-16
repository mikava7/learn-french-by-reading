import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import jaimeAudio1 from "../../audio/drive-download-20230711T213315Z-001/bonjor je mappelle jaime.mp3";
import Listen from "../../Components/Chapters/Listen";
import {
  BuildBox,
  BuildBoxContainer,
  TopBox,
  TopWord,
  BottomWord,
  BottomBox,
  PlayButton,
} from "../style-elementaryComponant";

import Bonjour from "../../audio/drive-download-20230711T213315Z-001/bonjor je mappelle jaime.mp3";
import { elementaryData } from "../elementary";
const SentenceBuilder = ({ Continue, lessonsCurrentIndex }) => {
  // const sentence = "Bonjour. Je m’appelle Jamie";
  // const words = ["m’appelle", "Bonjour.", "Je", , "Jamie"];
  const sentenceBuilder = elementaryData[lessonsCurrentIndex].sentenceBuilder;
  const { sentence, words } = sentenceBuilder;
  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handlePlay = () => {
    const playButton = new Audio(Bonjour);
    playButton.play();
  };
  useEffect(() => {
    handlePlay();
  }, []);
  const handleWordSelect = (index) => {
    setSelectedWords((prevSelectedWords) => {
      if (prevSelectedWords.includes(index)) {
        return prevSelectedWords.filter((wordIndex) => wordIndex !== index);
      } else {
        return [...prevSelectedWords, index];
      }
    });
  };
  const handleWordRemove = (index) => {
    setSelectedWords((prevSelectedWords) => {
      return prevSelectedWords.filter((wordIndex) => wordIndex !== index);
    });
  };

  const handleCheckAnswer = () => {
    const selectedSentence = selectedWords
      .map((index) => words[index])
      .join(" ");
    setIsCorrect(selectedSentence === sentence);

    setShowAnswers(true);
  };

  const handleRetry = () => {
    setSelectedWords([]);
    setShowAnswers(false);
  };
  return (
    <BuildBoxContainer>
      <PlayButton onClick={() => handlePlay()}>
        <Listen /> <span>play</span>
      </PlayButton>
      <h2>Build the Sentence</h2>
      <BuildBox>
        <TopBox>
          {selectedWords.map((wordIndex, index) => (
            <TopWord key={index} onClick={() => handleWordRemove(wordIndex)}>
              {words[wordIndex]}
            </TopWord>
          ))}
        </TopBox>
        <BottomBox>
          {words.map((word, index) => (
            <BottomWord
              isSelected={selectedWords.includes(index)}
              key={index}
              onClick={() => handleWordSelect(index)}
            >
              {word}
            </BottomWord>
          ))}
        </BottomBox>
        <BuildBox>
          {/* Other components */}

          {showAnswers ? (
            isCorrect ? (
              Continue
            ) : (
              <div onClick={handleRetry}>
                <Button>Retry</Button>
              </div>
            )
          ) : (
            <div onClick={handleCheckAnswer}>
              <Button>Submit</Button>
            </div>
          )}
        </BuildBox>
      </BuildBox>
    </BuildBoxContainer>
  );
};

const Button = styled.div`
  background-color: #70ff41;
  color: black;
  width: 20rem;
  font-weight: bold;

  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
`;

export default SentenceBuilder;
