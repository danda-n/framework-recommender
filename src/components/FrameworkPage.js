import React from "react";
import "./FrameworkPage.css";
// import FrameworkDataArray from "./FrameworkDataArray";

export default class FrameworkPage extends React.Component {
  render() {
    return (
      <div className="page-container">
        <header className="page-header">
          <div className="page-titles">
            <div className="header-title">React</div>
            <div className="space-normal"></div>
            <div className="header-subtitle">
              A JavaScript library for building user interfaces
            </div>
          </div>
        </header>
        <div className="page-content">
          <div className="page-content-1">
            <div className="content-framework-desc">
              React (also known as React.js or ReactJS) is a JavaScript library
              for building user interfaces. It is maintained by Facebook and a
              community of individual developers and companies. React can be
              used as a base in the development of single-page or mobile
              applications. However React is only concerned with rendering data
              to the DOM and so creating React applications usually requires the
              use of additional libraries for state management, routing, and
              interaction with an API. Redux, React Router and axios are
              respective examples of such libraries.
            </div>
          </div>
          <div className="page-content-2">
            <div className="page-features"></div>
          </div>
        </div>
      </div>
    );
  }
}
