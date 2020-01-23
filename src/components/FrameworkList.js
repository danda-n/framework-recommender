import React from "react";
import "./FrameworkList.css";
// import logo_react from "../images/logo_react.png";

class FrameworkList extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="container-left">
          <div className="card-framework">
            <div className="card-left">
              <div className="card-logo"></div>
            </div>
            <div className="card-right">
              <div className="card-header">React JS</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet
                consectetur adipiscing.
              </div>
            </div>
          </div>
          <div className="space-small"></div>
          <div className="card-framework">
            <div className="card-left">
              <div className="card-logo"></div>
            </div>
            <div className="card-right">
              <div className="card-header">Vue.JS</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet
                consectetur adipiscing.
              </div>
            </div>
          </div>
          <div className="space-small"></div>
          <div className="card-framework">
            <div className="card-left">
              <div className="card-logo"></div>
            </div>
            <div className="card-right">
              <div className="card-header">Angular</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet
                consectetur adipiscing.
              </div>
            </div>
          </div>
        </div>
        <div className="container-right">
          <div className="card-framework">
            <div className="card-left">
              <div className="card-logo"></div>
            </div>
            <div className="card-right">
              <div className="card-header">Ember</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet
                consectetur adipiscing.
              </div>
            </div>
          </div>
          <div className="space-small"></div>
          <div className="card-framework">
            <div className="card-left">
              <div className="card-logo"></div>
            </div>
            <div className="card-right">
              <div className="card-header">Svelte</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet
                consectetur adipiscing.
              </div>
            </div>
          </div>
          <div className="space-small"></div>
          <div className="card-framework">
            <div className="card-left">
              <div className="card-logo"></div>
            </div>
            <div className="card-right">
              <div className="card-header">Knockout</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet
                consectetur adipiscing.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrameworkList;
