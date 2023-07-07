import React from "react";
import { ThemeProvider, keyframes, css } from "styled-components";
import styled from "styled-components";
import moonIcon from "../../assets/moon-50.png";
import sunIcon from "../../assets/sun-50.png";
import {
  ThemeToggleContainer,
  ToggleImageContainer,
} from "../../Styles/globalStyles";
const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <ThemeToggleContainer onClick={toggleTheme} style={{ marginRight: "2rem" }}>
      <ToggleImageContainer theme={theme}>
        <img src={theme === "light" ? moonIcon : sunIcon} alt="Toggle Icon" />
      </ToggleImageContainer>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;
