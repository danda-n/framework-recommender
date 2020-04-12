import React from "react";
import { Link } from "react-router-dom";
import "../css/Layout.css";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <div className="app-navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/frameworks">Frameworks</Link>
              </li> */}
              <li>
                <Link to="/flowchart">Attribute based</Link>
              </li>
              <li>
                <Link to="/papi">PAPI based</Link>
              </li>
              <li>
                <Link to="/solution">The solution</Link>
              </li>
            </ul>
          </div>
        </header>

        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}
