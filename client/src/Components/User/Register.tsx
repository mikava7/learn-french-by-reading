import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectAuthStatus } from "../../strore/user.ts";
import { Navigate, useNavigate } from "react-router-dom";

const Registration: React.FC = () => {
  const authStatus = useSelector(selectAuthStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();

    const data = await dispatch(fetchRegister({ email, password }));

    if (data.payload && "token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    } else {
      // Otherwise, show an error message
      alert("Invalid email or password. Please try again.");
    }
  };

  if (authStatus) {
    return <Navigate to="/" />;
  }

  return (
    <RegistrationContainer>
      <StyledForms>
        <form onSubmit={handleRegistrationSubmit}>
          <h4>create account</h4>

          <input
            className="field"
            label="E-Mail"
            placeholder="Enter email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            className="field"
            label="password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <Buttons>
            <button type="submit">Sign up</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </Buttons>
        </form>
      </StyledForms>
    </RegistrationContainer>
  );
};

export default Registration;

const RegistrationContainer = styled.div`
  display: flex;
  border: 1px solid greenyellow;
  width: 100%;
  height: 100vh;
  margin: 0 3rem;
`;
const StyledForms = styled.div`
  /* Your styling */
`;

const PostContainer = styled.div`
  /* Your styling */
`;

const Buttons = styled.div`
  /* Your styling */
`;
