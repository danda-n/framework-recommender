import React from "react";
import "./FrameworkList.css";
import FrameworkCard from "./FrameworkCard";
import Framework from "./Framework";

export default class FrameworkList extends React.Component {
  render() {
    // const { Framework } = this.state;
    return (
      <div className="card-container">
        {Framework.map((framework, i) => {
          return (
            <FrameworkCard key={i}>
              title = {framework.title}
              description = {framework.description}
            </FrameworkCard>
          );
        })}
      </div>
    );
  }
}
