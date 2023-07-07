// Login.tsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";
import {
  FormContainer,
  InputField,
  FormButton,
  FormContainerApendix,
  SignLink,
} from "../../Styles/globalStyles";
import userIcon from "../../assets/user-50.png";
import passwordIcon from "../../assets/password-50.png";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isSuccess = useSelector((state) => state.auth.isSuccess);
  const error = useSelector((state) => state.auth.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Create user data object
    const userData = {
      username,
      password,
    };

    try {
      // Dispatch the loginUser action
      await dispatch(loginUser(userData));

      navigate("/"); // Navigate to the desired page
    } catch (error) {
      // Handle error
    }
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleLogin}>
        <InputField>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <label htmlFor=""></label>
          <img src={userIcon} alt="userIcon" />
        </InputField>
        <InputField>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src={passwordIcon} alt="passwordIcon" />
        </InputField>
        <ForgotPassword>
          <PasswordLink to="/">Forgot Password</PasswordLink>
        </ForgotPassword>
        <FormButton type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </FormButton>
        <FormContainerApendix>
          {" "}
          Not a member?
          <SignLink to="/register"> signup now</SignLink>
        </FormContainerApendix>
        {isSuccess && <p>Login successful</p>}
      </form>
    </FormContainer>
  );
};

const ForgotPassword = styled.div`
  text-align: left;
  margin: 10px 0 10px 5px;
`;
const PasswordLink = styled(Link)`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
