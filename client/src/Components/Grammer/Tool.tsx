import React from "react";
import styled from "styled-components";

const Tool = ({ text, translation }) => {
  return (
    <TooltipContainer>
      {text}
      <TooltipContent>{translation}</TooltipContent>
    </TooltipContainer>
  );
};

const TooltipContainer = styled.div`
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

const TooltipContent = styled.span`
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

export default Tool;
