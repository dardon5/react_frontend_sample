import "./App.css";
import TopBar from "./components/TopBar";
import Blogs from "./components/Blogs";
import Author from "./components/Author";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Router used for navigation between components, specifically when arrow is clicked on a given blog component or author component. Navigation bar should be present despite which component is rendered.

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
