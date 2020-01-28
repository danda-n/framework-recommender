import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import FrameworkList from "./components/FrameworkList";
import FrameworkPage from "./components/FrameworkPage";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";

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
