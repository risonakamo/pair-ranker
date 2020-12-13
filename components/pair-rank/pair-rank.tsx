import React from "react";

import PairChoice from "./components/pair-choice/pair-choice";

import "./pair-rank.less";

export default function PairRank():JSX.Element
{
  return <div className="pair-rank">
    <div className="history-zone">

    </div>
    <div className="choice-zone">
      <PairChoice/>
    </div>
    <div className="info-zone">

    </div>
  </div>;
}