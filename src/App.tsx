import Home from "./Template/Home";
import Navigation from "./Template/Navigation";
import Template from "./Template/Template";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename="/vite-react-ts-template">
      <div className="App flex h-[100vh] flex-col justify-between">
        <div className="Content m-20 flex h-full flex-col justify-center bg-black outline">
          <Switch>
            <Route exact path="/">
              <Template />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
