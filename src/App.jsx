import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state) => state.theme.appTheme);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`app ${theme ? "light" : ""}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
