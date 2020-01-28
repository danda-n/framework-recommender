import React from "react";
import { Link } from "react-router-dom";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-navigation">
          <Link to="/">Home</Link>
          {/* <Link to="/flowchart">Flowchart</Link> */}
          <Link to="/frameworks">Frameworks</Link>
        </div>
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}
