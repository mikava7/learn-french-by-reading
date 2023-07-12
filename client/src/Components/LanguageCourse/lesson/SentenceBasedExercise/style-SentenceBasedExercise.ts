import styled from "styled-components";

export const SentenceBasedExerciseContainer = styled.section`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center; /* Center align the h2 element */
  }
`;
export const BoxContainer = styled.div`
  border: 2px solid rgb(219, 255, 161);
  border-radius: 6px;
  padding: 2rem;
  padding-left: 3rem;
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 1rem 2rem;
  background-color: rgb(191, 243, 107);

  div {
    padding: 0.5rem;
    margin-bottom: 0.4rem;

    position: relative;
    border-radius: 12px;
    background-color: rgb(219, 255, 161);
    /* border: 2px solid grey; */
  }
`;

export const OptionButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  font-size: 1rem;
  padding: 4px 6px;
  cursor: pointer;
  gap: 1rem;
  color: black;
  &:first-child {
    margin-right: 0.6rem;
  }
  &:hover {
    transform: scale(1.2);
    background-color: rgb(253, 253, 40);
    color: rgb(40, 175, 253);
  }
`;
export const SubmitButton = styled.button`
  margin-top: 1rem;
  margin-left: auto; /* Add this line */
  padding: 1rem;
  font-size: 1.1rem;
  width: 8rem;
  background-color: rgb(253, 253, 40);
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  &:hover {
    background-color: rgb(107, 253, 40);
    color: ${(props) => props.theme.colors.text2};
  }
`;
