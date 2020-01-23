import React from "react";
import "./App.css";
import FrameworkList from "./components/FrameworkList";

function App() {
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
      <button className="b-flowchart">Flowchart</button>
      <FrameworkList></FrameworkList>
    </div>
  );
}

export default App;
