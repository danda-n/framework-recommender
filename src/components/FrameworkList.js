import React from "react";
import "./FrameworkList.css";
import FrameworkCard from "./FrameworkCard";
// import logo_react from "../images/logo_react.png";

class FrameworkList extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworks: [
        {
          header: "React",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
          logo: ""
        },
        {
          header: "Vue.JS",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
          logo: ""
        },
        {
          header: "Angular",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
          logo: ""
        },
        {
          header: "Ember",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
          logo: ""
        },
        {
          header: "Svelte",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
          logo: ""
        },
        {
          header: "Knockout",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Ipsum dolor sit amet consectetur adipiscing.",
          logo: ""
        }
      ]
    };
  }

  render() {
    let frameworkCards = this.state.frameworks.map(framework => {
      return (
        <FrameworkCard
          header={framework.header}
          description={framework.description}
        />
      );
    });
    return <div className="card-container">{frameworkCards}</div>;
  }
}

export default FrameworkList;
