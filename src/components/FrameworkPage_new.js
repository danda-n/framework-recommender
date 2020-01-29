import React from "react";
import "../css/FrameworkPage.css";
import FrameworkDataArray from "./FrameworkDataArray";

export default class FrameworkPage_new extends React.Component {
  state = { FrameworkDataArray };
  render() {
    return (
      <div>
        {FrameworkDataArray.map((framework, i) => {
          return (
            <div className="page-container" key={i}>
              <header className="page-header">
                <div className="page-titles">
                  <div className="header-title">{framework.title}</div>
                  <div className="header-subtitle">{framework.subtitle}</div>
                </div>
              </header>
              <div className="page-content-wrap">
                <div className="page-content">
                  <div className="page-content-1">
                    <div className="content-framework-desc spacing-1px">
                      <h2>{framework.title}</h2>
                      <p>{framework.description}</p>
                      <div className="content-framework-2 spacing-1px">
                        <h3>{framework.description_more_h1}</h3>
                        <p>{framework.description_more_p1}</p>
                        <p>{framework.description_more_p11}</p>
                      </div>
                      <div className="content-framework-2 spacing-1px">
                        <h3>{framework.description_more_h2}</h3>
                        <p>{framework.description_more_p2}</p>
                        <p>{framework.description_more_p21}</p>
                      </div>
                      <div className="content-framework-2 spacing-1px">
                        <h3>{framework.description_more_h3}</h3>
                        <p>{framework.description_more_p3}</p>
                        <p>{framework.description_more_p31}</p>
                      </div>
                    </div>
                  </div>
                  <div className="page-content-2">
                    <div className="content-framework-features">
                      <h2>Features</h2>
                      <h4>Advantages</h4>
                      <ul className="li-none">
                        {/* {FrameworkDataArray.advantages.map(advantage => (
                          <li>{advantage}</li>
                        ))} */}
                      </ul>
                      <h4>Disadvantages</h4>
                      <ul className="li-none">
                        {/* {FrameworkDataArray.disadvantages.map(disadvantage => (
                          <li>{disadvantage}</li>
                        ))} */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
//   render() {
//     return (

//         {FrameworkDataArray.map((framework, i) => {
//           <div className="page-container">
//             <header className="page-header">
//               <div className="page-titles">
//                 <div className="header-title">{framework.title}</div>
//                 <div className="header-subtitle">{framework.subtitle}</div>
//               </div>
//             </header>
//             <div className="page-content-wrap">
//               <div className="page-content">
//                 <div className="page-content-1">
//                   <div className="content-framework-desc spacing-1px">
//                     <h2>{framework.title}</h2>
//                     <p>{framework.description}</p>
//                     <div className="content-framework-2 spacing-1px">
//                       <h3>{framework.description_more.hp1}</h3>
//                       <p>{framework.description_more.p1}</p>
//                       <p>{framework.description_more.p1_1}</p>
//                     </div>
//                     <div className="content-framework-2 spacing-1px">
//                       <h3>{framework.description_more.hp2}</h3>
//                       <p>{framework.description_more.p2}</p>
//                       <p>{framework.description_more.p2_1}</p>
//                     </div>
//                     <div className="content-framework-2 spacing-1px">
//                       <h3>{framework.description_more.hp3}</h3>
//                       <p>{framework.description_more.p3}</p>
//                       <p>{framework.description_more.p3_1}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="page-content-2">
//                   <div className="content-framework-features">
//                     <h2>Features</h2>
//                     <h4>Advantages</h4>
//                     <ul className="li-none">
//                       {framework.advantages.map(advantage => (
//                         <li>{advantage}</li>
//                       ))}
//                     </ul>
//                     <h4>Disadvantages</h4>
//                     <ul className="li-none">
//                       {framework.disadvantages.map(disadvantage => (
//                         <li>{disadvantage}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </div>
//           })}

//     );
//   }
// }
