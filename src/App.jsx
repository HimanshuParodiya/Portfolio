import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Project from "./components/Projects/Project";

function App() {
  const theme = useSelector((state) => state.theme.appTheme);

  return (
    <div className={`app ${theme ? "light" : ""}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
