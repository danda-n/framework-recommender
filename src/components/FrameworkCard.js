import React from "react";
import { useHistory, useParams } from "react-router-dom";

const FrameworkCard = props => {
  let history = useHistory();

  function handleClick() {
    console.log(props.title);
    history.push("/frameworks/");
  }
  return (
    <div className="card-framework" onClick={handleClick}>
      <div className="card-title">{props.title}</div>
      <div className="card-content">{props.description}</div>
    </div>
  );
};

export default FrameworkCard;
