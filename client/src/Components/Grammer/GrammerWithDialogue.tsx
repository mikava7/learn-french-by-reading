import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Tool from "./Tool";

const GrammerWithDialogue = ({ dialogue }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogueRef = useRef(null);

  useEffect(() => {
    if (dialogueRef.current) {
      dialogueRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentIndex]);

  const handleNextPhrase = () => {
    if (currentIndex < dialogue.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <DialogueContainer onClick={handleNextPhrase}>
      <h2>Dialogue Title</h2>
      {dialogue.slice(0, currentIndex + 1).map((phrase, index) => (
        <Tool
          key={index}
          text={`${phrase.speaker}: ${phrase.phrase}`}
          translation={phrase.translation}
        />
      ))}
    </DialogueContainer>
  );
};

const DialogueContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid blanchedalmond;
  padding: 1rem 2rem;
  padding-bottom: 3rem;
  margin: 0 auto;
  width: 60%;
  cursor: pointer;
  overflow-y: auto;
  max-height: 300px;

  p {
    margin-top: 1rem;
  }
`;

export default GrammerWithDialogue;
