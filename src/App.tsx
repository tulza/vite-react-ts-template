import "@styles/styles.css";
import "@styles/fonts.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoute from "./route/AnimatedRoute";

function App() {
  return (
    <Router basename="/vite-react-ts-template">
      <AnimatedRoute />
    </Router>
  );
}

export default App;
