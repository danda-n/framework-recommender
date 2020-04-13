import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import FrameworkPage_new from "./components/FrameworkPage_new";
import HomePage from "./components/HomePage";
import Flowchart from "./components/Flowchart";
import Layout from "./components/Layout";
import Papi from "./components/PapiRicoQuePasa";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/flowchart" component={Flowchart} />
          <Route path="/papi" component={Papi} />
          <Route path="/solution">
            <Papi shouldApplyWeight></Papi>
          </Route>
          <Route path="/frameworks/:title" component={FrameworkPage_new} />
        </Switch>
      </Layout>
    </Router>
  );
}
