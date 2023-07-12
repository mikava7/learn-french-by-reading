import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import jaimeAudio1 from "../../audio/drive-download-20230711T213315Z-001/bonjor je mappelle jaime.mp3";
import Listen from "../../Components/Chapters/Listen";

const SentenceBuilder = () => {
  const sentence = "Bonjour. Je m’appelle Jamie";
  const words = ["Bonjour.", "Je", "react", "m’appelle", "Jamie"];
  const boxRef = useRef(null);
  const wordButtonRef = useRef(null);
  const [vertBox, setVertBox] = useState(20);
  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [containerPosition, setContainerPosition] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const [wordButtonHeight, setWordButtonHeight] = useState(0);
  const [wordPositions, setWordPositions] = useState([]);

  useEffect(() => {
    if (selectedWords.length > 0) {
      const newWordPosition = {
        top: containerPosition.top + wordButtonHeight + vertBox,
        left: containerPosition.left,
      };

      setWordPositions((prevWordPositions) => [
        ...prevWordPositions,
        newWordPosition,
      ]);
    }
  }, [selectedWords, vertBox, containerPosition, wordButtonHeight]);

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

  useEffect(() => {
    const updateContainerPosition = () => {
      const container = boxRef.current;

      if (container) {
        const { top, left, bottom, right } = container.getBoundingClientRect();
        setContainerPosition({ top, right, bottom, left });
      }

      const wordButton = wordButtonRef.current;

      if (wordButton) {
        const { height } = wordButton.getBoundingClientRect();
        setWordButtonHeight(height);
      }
    };

    // Initial position update
    updateContainerPosition();

    // Add event listener for window resize
    window.addEventListener("resize", updateContainerPosition);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updateContainerPosition);
    };
  }, []);

  const handleCheckAnswer = () => {
    const selectedSentence = selectedWords
      .map((index) => words[index])
      .join(" ");
    setIsCorrect(selectedSentence === sentence);
  };

  return (
    <div>
      <PlayButton>
        <Listen />
      </PlayButton>
      <h2>Build the Sentence</h2>
      <BuildBox>
        <p>{sentence}</p>

        <BuildedSentence ref={boxRef}>
          {selectedWords.map((wordIndex, index) => (
            <SelectedWord
              key={index}
              onClick={() => handleWordRemove(wordIndex)}
              style={{
                top: `${index * wordButtonHeight + 50}px`,
                left: 0,
              }}
            >
              {words[wordIndex]}
            </SelectedWord>
          ))}
        </BuildedSentence>
        <WordArray>
          {words.map((word, index) => (
            <WordButton
              ref={wordButtonRef}
              isSelected={selectedWords.includes(index)}
              key={index}
              onClick={() => handleWordSelect(index)}
              style={
                selectedWords.includes(index)
                  ? {
                      top: `${wordPositions[index]?.top}px`,
                      left: `${wordPositions[index]?.left}px`,
                    }
                  : null
              }
            >
              {word}
            </WordButton>
          ))}
        </WordArray>

        <button onClick={handleCheckAnswer}>Check Answer</button>
        {isCorrect && <p>Correct answer!</p>}
      </BuildBox>
    </div>
  );
};

const PlayButton = styled.div`
  width: 10rem;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 2px solid slateblue;
`;

const BuildedSentence = styled.div`
  border: 2px solid slateblue;
  margin: 0 auto;
  width: 20rem;
  height: 6rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 2rem;
  position: relative;
`;

const BuildBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WordArray = styled.div`
  display: flex;
`;
const WordButton = styled.button`
  padding: 0.5rem;
  margin: 0.4rem;
  margin-right: 1rem;
  cursor: pointer;

  display: ${(props) => (props.isSelected ? "none" : "block")};

  &:nth-child(odd) {
    margin-left: -1rem;
  }
`;

const SelectedWord = styled.span`
  background-color: red;
  padding: 0.5rem;

  margin-right: 1rem;
`;

export default SentenceBuilder;
