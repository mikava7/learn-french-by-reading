import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Chapters from "./Components/Chapters/Chapters";
import { troisMous } from "./data/TroisMous";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapters" element={<Chapters troisMous={troisMous} />} />
      </Routes>
    </>
  );
}

export default App;
