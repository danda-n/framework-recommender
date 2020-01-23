import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import FrameworkList from "./components/FrameworkList";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Front-end frameworks</h1>
        <p>
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
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
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
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
    <div>
      <h2>Frameworks</h2>
    </div>
  );
}
