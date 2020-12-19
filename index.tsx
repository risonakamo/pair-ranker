import React from "react";
import {render} from "react-dom";

import PairRank from "./components/pair-rank/pair-rank";
import IterableInsertionSorter from "./services/ii-sorter";

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

  // --- TESTING ---
  var a=new IterableInsertionSorter(["1","4","3","2"]);
  console.log(a);
  // --- END TESTING ---
}

window.onload=main;