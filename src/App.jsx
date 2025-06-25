import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";

const AppContent = () => {
  const location = useLocation();

  const isResume = location.pathname === "/resume";

  return (
    <div style={isResume ? { paddingTop: "40px" } : {}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppContent />
    </Router>
  );
};

export default App;
