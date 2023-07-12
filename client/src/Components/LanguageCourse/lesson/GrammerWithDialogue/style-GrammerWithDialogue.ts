import styled from "styled-components";

export const DialogueContainer = styled.div`
  height: 100vh;
`;

export const ScrollToBox = styled.div`
  margin-top: 20px;
`;

export const BoxContainer = styled.div`
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

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 1rem;

  margin: 0.4rem;
  width: 60%;
  color: rgb(40, 175, 253);
  &:nth-child(even) {
    background-color: #ffa7b5;
  }

  &:nth-child(odd) {
    background-color: yellow;
  }
  &:hover {
    .tooltip-content {
      visibility: visible;
    }
  }
`;

export const TooltipContent = styled.span`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

  ${TooltipContainer}:hover & {
    visibility: visible;
  }

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;
