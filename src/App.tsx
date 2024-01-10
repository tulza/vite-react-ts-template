import Create from "./Template/Create";
import Navigation from "./Template/Navigation";
import Template from "./Template/Template";
import Default from "./Template/default";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename="/vite-react-ts-template">
      <div className="App flex h-[100vh] flex-col justify-between">
        <div className="Content m-20 h-full bg-black outline">
          <Switch>
            <Route exact path="/">
              <Default />
            </Route>
            <Route path="/home">
              <Template />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
