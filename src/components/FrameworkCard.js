import React from "react";

class FrameworkCard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("click");
  }

  render() {
    return (
      <div className="card-framework" onClick={this.handleClick}>
        <div className="card-title">{this.props.title}</div>
        <div className="card-content">{this.props.description}</div>
      </div>
    );
  }
}

export default FrameworkCard;
