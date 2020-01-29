import React from "react";
import "../css/FrameworkList.css";
import FrameworkCard from "./FrameworkCard";
import FrameworkDataArray from "./FrameworkDataArray";

export default class FrameworkList extends React.Component {
  render() {
    return (
      <div className="card-container">
        {FrameworkDataArray.map((frameworks, i) => {
          return (
            <FrameworkCard
              key={i}
              title={frameworks.title}
              description={frameworks.description_card}
            />
          );
        })}
      </div>
    );
  }
}
