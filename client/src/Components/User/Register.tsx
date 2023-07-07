// Register.tsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/slices/authSlice";
import {
  FormContainer,
  InputField,
  FormButton,
  FormContainerApendix,
  SignLink,
} from "../../Styles/globalStyles";

import userIcon from "../../assets/user-50.png";
import passwordIcon from "../../assets/password-50.png";
import emailIcon from "../../assets/email-50.png";
const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isSuccess = useSelector((state) => state.auth.isSuccess);
  const error = useSelector((state) => state.auth.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Create user data object
    const userData = {
      username,
      password,
      email,
    };

    // Dispatch the registerUser action
    dispatch(registerUser(userData));
  };

  return (
    <FormContainer>
      <h2>Register</h2>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleRegister}>
        <InputField>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <img src={userIcon} alt="userIcon" />
        </InputField>

        <InputField>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <img src={emailIcon} alt="emailIcon" />
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
        <FormButton type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </FormButton>
        <FormContainerApendix>
          {" "}
          Already Have Account?
          <SignLink to="/login">login</SignLink>
        </FormContainerApendix>
        {isSuccess && <p>Registration successful</p>}
      </form>
    </FormContainer>
  );
};

export default Register;
