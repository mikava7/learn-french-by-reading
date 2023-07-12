import React, { useState } from "react";
import { verbsConjugations } from "../../../../data/verbConjugation";
import styled from "styled-components";
const VerbConjugation = ({ nextButton }) => {
  const [verbs, setVerbs] = useState(verbsConjugations);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const handleNextSet = () => {
    if (currentSetIndex < verbs.length - 1) {
      setCurrentSetIndex(currentSetIndex + 1);
    }
  };

  const currentSet = verbs[currentSetIndex];

  return (
    <VerbConjugationContainer>
      {/* Render the title of the set */}
      <VerbConjugationTitle>
        {verbs[currentSetIndex].verbs}
      </VerbConjugationTitle>
      {/* Render the French and Georgian conjugations */}
      {verbs[currentSetIndex].conjugations.map((conjugationGroup, index) => (
        <ConjugationBox key={index}>
          <h3>{conjugationGroup.verb}</h3>
          <ul>
            {conjugationGroup.french.map((frenchConjugation, index) => (
              <div key={index}>
                <span>
                  <li>{frenchConjugation}</li>
                </span>

                <span>
                  <li>{conjugationGroup.georgian[index]}</li>
                </span>
              </div>
            ))}
          </ul>
        </ConjugationBox>
      ))}
      {/* Render the Next Set button */}
      {nextButton}
    </VerbConjugationContainer>
  );
};

export const VerbConjugationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #808080b7;
  width: 570px;
  min-width: 400px;
  border-radius: 1rem;
  margin: 0 auto;
`;
export const VerbConjugationTitle = styled.h2`
  font-size: 3rem;
  padding: 0.5rem 1rem;
  text-align: center;
  margin-bottom: 0;
`;
export const ConjugationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 3px solid grey;

  margin-top: 0;
  h3 {
    display: inline-block;
    text-align: center;
    background-color: #daff56;
    padding: 0.5rem 1rem;
    margin-bottom: 0;
  }
  div {
    background-color: #a5b56a;
    border-top: 3px solid grey;

    display: flex;
    width: 100%;
    max-width: 700px;

    text-align: flex-start;
    span {
      &:first-child {
        margin-right: 1rem;
      }
      &:nth-child(even) {
        background-color: #ffd57c;
      }
      &:nth-child(odd) {
        background-color: #c2ff7c;
      }
    }
    li {
      list-style: none;
      width: 100%;
      min-width: 150px;
      width: 160px;
      padding: 1.5rem 2rem;
      font-size: 1.2rem;
    }
  }
`;

export default VerbConjugation;
