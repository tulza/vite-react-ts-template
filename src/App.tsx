import Home from "@components/Home";
import MathGame from "@components/MathGame";
import Navigation from "@components/Navigation";
import Template from "@components/Template";
import "@styles/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="/vite-react-ts-template">
      <div className="App flex h-[100vh] flex-col justify-between">
        <div className="Content m-20 flex h-[800px]  flex-col justify-center bg-black outline">
          <Routes>
            <Route path="/" element={<Template />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mathgame" element={<MathGame />} />
          </Routes>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
