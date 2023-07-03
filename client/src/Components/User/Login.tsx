import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, selectAuthStatus } from "../../strore/user";
import { Navigate, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const authStatus = useSelector(selectAuthStatus);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const data = await dispatch(fetchLogin({ email, password }));

    if (data.payload && "token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  if (authStatus) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <input
          className="field"
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          className="field"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <div>
          <button type="submit">Login</button>
          <button onClick={() => navigate("/register")}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
