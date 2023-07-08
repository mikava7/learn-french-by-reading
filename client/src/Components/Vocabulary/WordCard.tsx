import React from "react";
import styled from "styled-components";
import Favorite from "../Chapters/Favorite";
import Listen from "../Chapters/Listen";
import Example from "./Example";
import { StyledButton } from "../../Styles/globalStyles";
import nextIcon from "../../assets/next-48.png";
const WordCard = ({ french, translation, onNext }) => {
  return (
    <CardContainer>
      <Word>{french}</Word>
      <Translation>
        <span>Translation: </span> {translation}
      </Translation>
      <MiddlePart>
        <Favorite />
        <Listen />
      </MiddlePart>
      <Icons>
        <Example />

        <NextIcon onClick={onNext}>
          <img src={nextIcon} alt="nextIcon" />
        </NextIcon>
      </Icons>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  border: 1px solid black;
  height: 25rem;
  width: 20rem;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.formBackground};
  color: ${(props) => props.theme.colors.text2};
  &:not(input) {
    user-select: none;
  }
`;

const Word = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.text2};
  color: ${(props) => props.theme.colors.text};
  border-radius: 12px;
  font-size: 1.3rem;
  margin-top: 3rem;
`;

const Translation = styled.div`
  font-size: 1.1rem;
  flex-direction: column;
  font-style: italic;
  display: flex;
  border-radius: 12px;
  width: 80%;
  text-align: center;
  background-color: ${(props) => props.theme.colors.text2};
  color: ${(props) => props.theme.colors.text};

  padding: 1rem;
  span {
    padding: 1rem;
  }
`;
const Icons = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const NextIcon = styled.div`
  /* margin-left: auto; */
`;
const MiddlePart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export default WordCard;
