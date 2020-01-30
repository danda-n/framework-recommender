import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import FrameworkPage from "./components/FrameworkPage";
import FrameworkPage_new from "./components/FrameworkPage_new";
import HomePage from "./components/HomePage";
import Flowchart from "./components/Flowchart";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/flowchart" component={Flowchart} />
          <Route path="/frameworks/:title" component={FrameworkPage} />
        </Switch>
      </Layout>
    </Router>
  );
}
