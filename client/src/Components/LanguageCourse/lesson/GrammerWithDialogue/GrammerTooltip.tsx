import React from "react";
import { TooltipContent, TooltipContainer } from "./style-GrammerWithDialogue";
const GrammerTooltip = ({ text, translation }) => {
  return (
    <TooltipContainer>
      {text}
      <TooltipContent>{translation}</TooltipContent>
    </TooltipContainer>
  );
};

export default GrammerTooltip;
