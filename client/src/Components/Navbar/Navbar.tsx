import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRss,
  faClockRotateLeft,
  faBookmark,
  faStar,
  faUser,
  faUserPlus,
  faShop,
  faUsers,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { selectAuthStatus } from "../../strore/user.ts";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const authStatus = useSelector(selectAuthStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Navigation>
      {!authStatus ? (
        <div>
          <StyledLink to="/" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </StyledLink>
        </div>
      ) : (
        <div>
          <StyledLink to="/login" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUser} />
            Login
          </StyledLink>
          <StyledLink to="/register" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUserPlus} />
            Register
          </StyledLink>
        </div>
      )}
    </Navigation>
  );
};

const Navigation = styled.div`
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  margin-left: ${(props) => props.marginLeft || "1rem"};
  max-width: ${(props) => props.maxWidth || "350px"};
  flex-direction: ${(props) => props.flexDirection || "column"};

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

export const SlideOutMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  padding: 10px;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;

  width: 150px;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  list-style: none;
`;

export default Navbar;
