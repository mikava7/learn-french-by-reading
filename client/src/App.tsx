import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import { refreshToken } from "./redux/slices/authSlice";
import TroisMus from "./Components/TroisMus/TroisMus";
import Words from "./Components/Words/Words";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import Navbar from "./Components/Header/Navbar";
import Header from "./Components/Header/Header";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/theme";
import ThemeToggle from "./Components/ToggleTheme/ToggleTheme";
import { GlobalStyle } from "./Styles/globalStyles";
import LessonComponent from "./Components/Vocabulary/LessonComponent";
import WordQuiz from "./Components/Vocabulary/WordQuiz";

function App() {
  const [theme, setTheme] = React.useState("light");
  const displayNav = true;
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  useEffect(() => {
    // Load the access token from local storage and refresh the token if necessary
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(refreshToken());
      console.log("accessToken", accessToken);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Navbar
          isAuthenticated={isAuthenticated}
          user={user}
          handleLogout={handleLogout}
          displayNav={displayNav}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        {/* <Header isAuthenticated={isAuthenticated} user={user} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lesson" element={<LessonComponent />} />
          <Route path="/quiz" element={<WordQuiz />} />

          <Route path="/trois" element={<TroisMus />} />
          <Route path="/words" element={<Words />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-bottom: 1px solid red;
  background-color: ${({ theme }) => theme.colors.inputText};
  color: ${({ theme }) => theme.colors.text};
  width: 95%;
  height: 100vh;
  border-radius: 12px;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 1rem;
`;

export default App;
