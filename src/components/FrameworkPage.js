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
            <div className="content-framework-desc spacing-1px">
              <h3>ReactJS</h3>
              React (also known as React.js or ReactJS) is a JavaScript library
              for building user interfaces. It is maintained by Facebook and a
              community of individual developers and companies. React can be
              used as a base in the development of single-page or mobile
              applications. However React is only concerned with rendering data
              to the DOM and so creating React applications usually requires the
              use of additional libraries for state management, routing, and
              interaction with an API. Redux, React Router and axios are
              respective examples of such libraries.
              <div className="content-framework-2 spacing-1px">
                <h3>Declarative</h3>
                <p>
                  React makes it painless to create interactive UIs. Design
                  simple views for each state in your application, and React
                  will efficiently update and render just the right components
                  when your data changes.
                </p>
                <p>
                  Declarative views make your code more predictable and easier
                  to debug.
                </p>
              </div>
              <div className="content-framework-3 spacing-1px">
                <h3>Component-Based</h3>
                <p>
                  Build encapsulated components that manage their own state,
                  then compose them to make complex UIs.
                </p>
                <p>
                  Since component logic is written in JavaScript instead of
                  templates, you can easily pass rich data through your app and
                  keep state out of the DOM.
                </p>
              </div>
              <div className="content-framework-3 spacing-1px">
                <h3>Learn Once, Write Everywhere</h3>
                <p>
                  We don’t make assumptions about the rest of your technology
                  stack, so you can develop new features in React without
                  rewriting existing code.
                </p>
                <p>
                  React can also render on the server using Node and power
                  mobile apps using{" "}
                  <a href="https://facebook.github.io/react-native/">
                    React Native
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="page-content-2">
            <div className="content-framework-features">
              <h3>Features</h3>
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
        </div>
      </div>
    );
  }
}
