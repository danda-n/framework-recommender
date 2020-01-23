import React from "react";

class FrameworkCard extends React.Component {
  render() {
    return (
      <div className="card-framework">
        {/* <div className="card-logo">{this.props.logo}</div> */}
        <div className="card-header">{this.props.header}</div>
        <div className="card-content">{this.props.description}</div>
      </div>
    );
  }
}

export default FrameworkCard;
