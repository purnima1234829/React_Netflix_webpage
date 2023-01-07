import React from "react";
import ReactDom from "react-dom";
import Card from "./card";
import "./styles.css";
import Sdata from "./Sdata";

//console.log(Sdata[0]);
// function ncard(val) {
//     return (
//         <Card
//             imgsrc={val.imgsrc}
//             title={val.title}
//             sname={val.sname}
//             link={val.links}
//         />
//     )
// }
ReactDom.render(
  <>
    <h1 className="heading_style">List of top Netflix Series </h1>
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );
    })}
    ;
  </>,
  document.getElementById("root")
);
