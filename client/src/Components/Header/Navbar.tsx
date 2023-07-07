import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserLinks from "./UserLinks";
import { StyledButton, StyledLink } from "../../Styles/globalStyles";
import ThemeToggle from "../../Components/ToggleTheme/ToggleTheme";
import { NavBarContainer } from "../../Styles/globalStyles";
/*
 * This is a ready to use component, just import it and plop it into your project as:
 * <Navbar/>
 * You might want to move all the style components into separate files for readability
 * if you plan to do more with it.
 */

const MainNav = styled.ul`
  list-style-type: none;
  display: ${(props) => props.display};
  flex-direction: column;

  display: flex !important;
  flex-direction: row;
`;
const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
`;

const Logo = styled.li`
  display: inline-block;
  font-size: 2rem;
  margin-top: 10px;
  margin-left: 20px;
`;
const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;

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

  return (
    <NavBarContainer>
      <Logo href="#">logo</Logo>
      <MainNav display={navDisplay}>
        <NavLi>
          <StyledLink to="/">Accueil</StyledLink>
        </NavLi>
        {/* <NavLi>
          <StyledLink to="/books">Books</StyledLink>
        </NavLi> */}
        <NavLi>
          <StyledLink to="/trois">Trois Mousquetaires</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to="/lesson">Vocabulary lesson</StyledLink>
        </NavLi>
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
    border: 1px solid red;
  }
`;
export default Navbar;
