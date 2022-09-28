import logo from "./levvel-logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import Blogs from "./components/Blogs";
import Author from "./components/Author";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
