import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import FrameworkList from "./components/FrameworkList";
import FrameworkPage from "./components/FrameworkPage";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* <Route path="/flowchart">
            <Flowchart />
          </Route> */}
          <Route path="/frameworks">
            <FrameworkPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

function Layout(props) {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      {/* <Link to="/flowchart">Flowchart</Link> */}
      <Link to="/frameworks">Frameworks</Link>
      {props.children}
    </div>
  );
}
