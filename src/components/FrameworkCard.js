import React from "react";
import { useHistory } from "react-router-dom";

const FrameworkCard = props => {
  let history = useHistory();
  console.log(props.title);

  function handleClick() {
    history.push("/frameworks");
  }

  return (
    <div className="card-framework" onClick={handleClick}>
      <div className="card-title">{props.title}</div>
      <div className="card-content">{props.description}</div>
    </div>
  );
};

export default FrameworkCard;
