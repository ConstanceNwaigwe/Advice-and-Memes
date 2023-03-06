import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Advice } from "./pages/Advice";
import { Meme } from "./pages/Meme";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Advice />}></Route>
        <Route exact path="/advice" element={<Advice />} />
        <Route exact path="/meme" element={<Meme />} />
        <Route path="*" element={<Advice />} />
      </Routes>
    </Router>
  );
}

export default App;
