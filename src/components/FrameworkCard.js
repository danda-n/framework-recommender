import React from "react";
import { useHistory } from "react-router-dom";

const FrameworkCard = props => {
  let history = useHistory();

  function handleClick() {
    history.push(`/frameworks/${props.title}`);
  }
  return (
    <div className="card-framework" onClick={handleClick}>
      <div className="card-title">{props.title}</div>
      <div className="card-content">{props.description}</div>
    </div>
  );
};

export default FrameworkCard;
