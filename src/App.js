import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// import các component trang
import Home from "./components/home";
import Part1 from "./components/page1";
import Part2 from "./components/page2";
import Part3 from "./components/page3";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="App-header">
      <h1>Tư tưởng Hồ Chí Minh</h1>
      <div className="App-menu">
        <button onClick={() => navigate("/")}>Trang chủ</button>
        <button onClick={() => navigate("/part1")}>Phần 1</button>
        <button onClick={() => navigate("/part2")}>Phần 2</button>
        <button onClick={() => navigate("/part3")}>Phần 3</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/part1" element={<Part1 />} />
          <Route path="/part2" element={<Part2 />} />
          <Route path="/part3" element={<Part3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
