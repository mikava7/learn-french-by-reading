import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Chapters from "./Components/Chapters/Chapters";
import { troisMous } from "./data/TroisMous";
import TroisMus from "./Components/TroisMus/TroisMus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/chapters" element={<Chapters troisMous={troisMous} />} />
        <Route path="/trois" element={<TroisMus />} />
      </Routes>
    </>
  );
}

export default App;
