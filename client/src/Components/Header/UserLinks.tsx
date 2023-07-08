import React from "react";
import styled from "styled-components";
import { StyledButton, StyledLink } from "../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const UserLinks = ({ isAuthenticated, user, handleLogout }) => {
  const { t } = useTranslation();

  return (
    <UserLinksContainer>
      {" "}
      {isAuthenticated && user ? (
        <WelcomeUserContainer>
          <li>Welcome, {user.username}!</li>
          <li>
            <StyledButton onClick={handleLogout}>
              {t("Se déconnecter")}
            </StyledButton>
          </li>
        </WelcomeUserContainer>
      ) : (
        <>
          <LoginLink to="/login">{t("Connexion")}</LoginLink>
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
const LoginLink = styled(Link)`
  display: flex;
  padding: 1rem;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  color: ${(props) => props.theme.colors.text2};
`;
const WelcomeUserContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 1rem;
  font-weight: bold;
  padding: 1rem;
  button {
    padding: 1rem;
  }
  li:first-child {
  }
`;
export default UserLinks;
