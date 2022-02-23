import React from "react";
import ReactDom from "react-dom";
import "./index.css";

let currDate = new Date(2020, 2, 23);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Moring";
  cssStyle.color = "orange";
} else if (currDate >= 12 && currDate < 18) {
  greeting = "good afternoon";
  cssStyle.color = "yellow";
} else {
  greeting = "good night";
  cssStyle.color = "black";
}

ReactDom.render(
  <div className="opo">
    <div className="gallery">
      <h1 className="heading">
        Hello sir, <span style={cssStyle}>{greeting}</span>{" "}
      </h1>
    </div>
  </div>,
  document.getElementById("root")
);
