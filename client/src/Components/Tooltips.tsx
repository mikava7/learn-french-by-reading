import React from "react";
import styled from "styled-components";
import star from "../assets/star.png";
const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div`
  display: flex;
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 14px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  img {
    width: 20px;
    height: 20px;
    background-color: transparent;
  }
  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltips = ({ content, children }) => {
  return (
    <TooltipContainer>
      {children}
      <TooltipContent>
        {content}

        <img src={star} alt="star" />
      </TooltipContent>
    </TooltipContainer>
  );
};

export default Tooltips;
