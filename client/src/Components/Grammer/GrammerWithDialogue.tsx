import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Tool from "./Tool";
import { dialogue } from "../../data/grammer";

const GrammerWithDialogue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogueRef = useRef(null);
  const scrollToBoxRef = useRef(null);

  useEffect(() => {
    const container = dialogueRef.current;

    if (container.scrollHeight > 600) {
      container.scrollTo({
        top: container.scrollTop + 100,
        behavior: "smooth",
      });
    }

    if (scrollToBoxRef.current) {
      scrollToBoxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentIndex]);

  const handleNextPhrase = () => {
    if (currentIndex < dialogue.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Container>
      <DialogueContainer onClick={handleNextPhrase} ref={dialogueRef}>
        <h2>Dialogue Title</h2>
        {dialogue.slice(0, currentIndex + 1).map((phrase, index) => (
          <Tool
            key={index}
            text={`${phrase.speaker}: ${phrase.phrase}`}
            translation={phrase.translation}
          />
        ))}
        <ScrollToBox ref={scrollToBoxRef}></ScrollToBox>
      </DialogueContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const ScrollToBox = styled.div`
  margin-top: 20px;
`;

const DialogueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.3rem;
  padding: 1rem 2rem;
  margin: 0 auto;
  padding-bottom: 6rem;
  width: 100%;
  overflow-y: auto;
`;

export default GrammerWithDialogue;
