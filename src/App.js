import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import FrameworkList from "./components/FrameworkList";

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/flowchart">Flowchart</Link>
      <Link to="/frameworks">Frameworks</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/flowchart">
          <Flowchart />
        </Route>
        <Route path="/frameworks">
          <Frameworks />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <h1>Front-end frameworks</h1>
      <p>
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <FrameworkList></FrameworkList>
    </div>
  );
}

function Flowchart() {
  return (
    <div>
      <h2>Flowchart</h2>
    </div>
  );
}

function Frameworks() {
  return (
    <div className="Frameworks">
      <h2>Frameworks</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <hr />
    </div>
  );
}
