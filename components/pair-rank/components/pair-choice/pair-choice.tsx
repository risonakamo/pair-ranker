import React from "react";

import "./pair-choice.less";

export default function PairChoice():JSX.Element
{
  return <div className="pair-choice">
    <h1 className="choice left">
      choice1
      <img src="assets/img/chevron-left.svg" className="choice-arrow"/>
    </h1>
    <div className="mid-split">

    </div>
    <h1 className="choice right">
      <img src="assets/img/chevron-right.svg" className="choice-arrow"/>
      choice2
    </h1>
  </div>;
}