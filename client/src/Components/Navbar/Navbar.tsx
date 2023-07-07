// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faRss,
//   faClockRotateLeft,
//   faBookmark,
//   faStar,
//   faUser,
//   faUserPlus,
//   faShop,
//   faUsers,
//   faSignOutAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { selectAuthStatus } from "../../strore/user.ts";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const authStatus = useSelector(selectAuthStatus);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <Navigation>
//       {authStatus ? (
//         <div>
//           <StyledLink to="/" onClick={handleLogout}>
//             <FontAwesomeIcon icon={faSignOutAlt} />
//             Logout
//           </StyledLink>
//         </div>
//       ) : (
//         <div>
//           <StyledLink to="/login" onClick={toggleMenu}>
//             <FontAwesomeIcon icon={faUser} />
//             Login
//           </StyledLink>
//           <StyledLink to="/register" onClick={toggleMenu}>
//             <FontAwesomeIcon icon={faUserPlus} />
//             Register
//           </StyledLink>
//         </div>
//       )}
//     </Navigation>
//   );
// };

// const Navigation = styled.div``;

// export const SlideOutMenu = styled.div``;

// const StyledLink = styled(Link)``;

// export default Navbar;
