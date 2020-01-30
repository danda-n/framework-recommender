import React from "react";
import "../css/FrameworkPage.css";
import FrameworkDataArray from "./FrameworkDataArray";

export default class FrameworkPage_new extends React.Component {
  render() {
    const frameworkData = FrameworkDataArray.find(
      framework => framework.title === this.props.match.params.title
    );
    return (
      <div className="page-container">
        <header className="page-header">
          <div className="page-titles">
            <div className="header-title">{frameworkData.title}</div>
            <div className="header-subtitle">{frameworkData.subtitle}</div>
          </div>
        </header>
        <div className="page-content-wrap">
          <div className="page-content">
            <div className="page-content-1">
              <div className="content-framework-desc spacing-1px">
                <h2>{frameworkData.title}</h2>
                <p>{frameworkData.description_card}</p>
                {frameworkData.description.map((desc, i) => (
                  <div className="content-framework-2 spacing-1px">
                    <h3>{desc.heading}</h3>
                    {desc.paragraph.map((par, k) => (
                      <p key={k}>{par}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="page-content-2">
              <div className="content-framework-features">
                <h2>Features</h2>
                <h4>Advantages</h4>
                <ul className="li-none">
                  {frameworkData.advantages.map((adv, i) => (
                    <li key={i}>{adv}</li>
                  ))}
                </ul>
                <h4>Disadvantages</h4>
                <ul className="li-none">
                  {frameworkData.disadvantages.map((disadv, i) => (
                    <li key={i}>{disadv}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
