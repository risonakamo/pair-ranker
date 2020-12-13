import React from "react";
import {render} from "react-dom";

import PairRank from "./components/pair-rank/pair-rank";

import "./index.less";

function IndexMain():JSX.Element
{
  return <>
    <PairRank/>
  </>;
}

function main()
{
  render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;