import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/slices/authSlice";
import styled, { keyframes } from "styled-components";
import menuIcon from "../../assets/menu-50.png";
import closeIcon from "../../assets/x-50.png";
import chevronDown from "../../assets/icons8chevron-down-24.png";
import chevronRight from "../../assets/chevron-right-24.png";
import UserLinks from "./UserLinks";
const Header = ({ isAuthenticated, user }) => {
  console.log("isAuthenticated", isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <StyledHeader>
      <Navbar>
        <img src={menuIcon} alt="menu" />
        <NavLinks>
          <div>
            <span>Learn Frenc</span>
            <img src={closeIcon} alt="closeIcon" />
          </div>
          <Links>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/books">Books</StyledLink>
              <img src={chevronDown} alt="chevronDown" />
              <SubMenu>
                <li>
                  <StyledLink to="/book1">The Three Musketeers</StyledLink>
                </li>
                <li>
                  <StyledLink to="/book2">Les Misérables</StyledLink>
                </li>
                <li>
                  <StyledLink to="/book3">The Count of Monte Cristo</StyledLink>
                </li>
              </SubMenu>
            </li>
            <li>
              <StyledLink to="/vocabulary">Vocabulary</StyledLink>
            </li>
            <li>
              <StyledLink to="/grammer">Grammer</StyledLink>
            </li>
          </Links>
          <UserLinks
            isAuthenticated={isAuthenticated}
            user={user}
            handleLogout={handleLogout}
          />
          {isAuthenticated && user ? (
            <>
              <li>
                <span>Welcome, {user.username}!</span>
              </li>
              <li>
                <StyledButton onClick={handleLogout}>Logout</StyledButton>
              </li>
            </>
          ) : (
            <>
              <li>
                <StyledLink to="/login">Login</StyledLink>
              </li>
              <li>
                <StyledLink to="/register">Register</StyledLink>
              </li>
            </>
          )}
        </NavLinks>
      </Navbar>
    </StyledHeader>
  );
};
const ani = keyframes`
  0% {
    width: 0%;
    height: 1px;
    left: 50%;
  }

  50% {
    width: 100%;
    height: 1px;
    left: 0;
  }

  100% {
    width: 100%;
    height: 100%;
    left: 0;
  }
`;

const SubMenu = styled.nav``;

const StyledHeader = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  background: #4a98f7;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
const Navbar = styled.nav`
  display: flex;

  justify-content: space-between;
  margin: auto;
  /* background: red; */
  padding: 0 50px;
  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0 14px;
  }
`;
const NavLinks = styled.nav`
  line-height: 70px;
  height: 100%;
`;
const Links = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  position: relative;
  transition: 0.8s all linear;
  padding: 5px 15px;

  &:hover {
    color: #292929;
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #4d4d2c;
    z-index: -1;
  }

  &:hover::before {
    animation: ${ani} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export default Header;
