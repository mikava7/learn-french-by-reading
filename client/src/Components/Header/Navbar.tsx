import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserLinks from "./UserLinks";
import { StyledButton, StyledLink } from "../../Styles/globalStyles";
import ThemeToggle from "../../Components/ToggleTheme/ToggleTheme";
import { NavBarContainer } from "../../Styles/globalStyles";
import Localization from "../../localization/Localization";

import { useTranslation } from "react-i18next";

const Navbar = ({
  displayNav,
  isAuthenticated,
  user,
  handleLogout,
  toggleTheme,
  theme,
}) => {
  const [navDisplay, setNavDisplay] = React.useState(
    displayNav ? "flex" : "none"
  );

  const toggleNavBar = () => {
    setNavDisplay((prevDisplay) => (prevDisplay === "none" ? "flex" : "none"));
  };
  const { t } = useTranslation();

  return (
    <NavBarContainer>
      <Localization />
      <MainNav display={navDisplay}>
        <li>
          <StyledLink to="/">{t("Accueil")}</StyledLink>
        </li>

        <li>
          <StyledLink to="/trois">{t("Trois Mousquetaires")}</StyledLink>
        </li>

        <li>
          <StyledLink to="/lesson">{t("Leçons")}</StyledLink>
        </li>
      </MainNav>

      <User>
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <UserLinks
          isAuthenticated={isAuthenticated}
          user={user}
          handleLogout={handleLogout}
          displayNav={displayNav}
        />
      </User>
    </NavBarContainer>
  );
};

Navbar.propTypes = {
  displayNav: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  handleLogout: PropTypes.func,
};
const User = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > :first-child {
    width: 10%;
  }

  & > :last-child {
    width: 90%;
  }
`;

const MainNav = styled.ul`
  list-style-type: none;
  display: ${(props) => props.display};
  flex-direction: column;
  display: flex !important;
  flex-direction: row;
  li {
    font-size: 1rem;
    border-right: 2px solid red;
  }
`;

export default Navbar;
