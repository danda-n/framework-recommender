import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Link>{this.props.children}</Link>
      </div>
    );
  }
}
