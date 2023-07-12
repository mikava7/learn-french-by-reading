import React, { useState } from "react";
import styled from "styled-components";
import Dialogues from "./Dialogue/Dialogues";
import NewPhrases from "./NewPhrases";
const JaimeEtClaire = () => {
  const [score, setScore] = useState(0);

  const [lessonsCurrentIndex, setLessonsCurrentIndex] = useState(1);
  const handleNext = () => {
    setLessonsCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <Dialogues
        score={score}
        setScore={setScore}
        nextButton={<NextButton onClick={handleNext}>Next</NextButton>}
      />
      <NewPhrases />
    </div>
  );
};
const NextButton = styled.button`
  width: 18rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  background-color: #d3f125;
  margin: 0 auto;
  cursor: pointer;
`;
export default JaimeEtClaire;
