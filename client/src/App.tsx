import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
// import Chapters from "./Components/Chapters/Chapters";
import { troisMous } from "./data/TroisMous";
import TroisMus from "./Components/TroisMus/TroisMus";
import Words from "./Components/Words/Words";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/chapters" element={<Chapters troisMous={troisMous} />} /> */}
        <Route path="/trois" element={<TroisMus />} />
        <Route path="/words" element={<Words />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
