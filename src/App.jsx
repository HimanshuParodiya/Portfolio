import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const theme = useSelector((state) => state.theme.appTheme);

  return (
    <div className={` app ${theme ? "light" : ""}`}>
      <Navbar />
    </div>
  );
}

export default App;
