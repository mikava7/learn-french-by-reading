import React from "react";
import styled from "styled-components";
import { StyledButton, StyledLink } from "../../Styles/globalStyles";
const UserLinks = ({ isAuthenticated, user, handleLogout }) => {
  return (
    <UserLinksContainer>
      {" "}
      {isAuthenticated && user ? (
        <WelcomeUserContainer>
          <li>Welcome, {user.username}!</li>
          <li>
            <StyledButton onClick={handleLogout}>Logout</StyledButton>
          </li>
        </WelcomeUserContainer>
      ) : (
        <>
          <LoginLink>
            <StyledLink to="/login">Login</StyledLink>
          </LoginLink>
        </>
      )}
    </UserLinksContainer>
  );
};
const UserLinksContainer = styled.ul`
  display: flex;
  li {
    list-style: none;
  }
`;
const LoginLink = styled.li`
  display: flex;
`;
const WelcomeUserContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 1rem;
  font-weight:bold
  padding: 1rem;
  li:first-child {
  }
`;
export default UserLinks;
