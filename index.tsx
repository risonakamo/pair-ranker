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
  var isort=new IterableInsertionSorter(["2","1","4","3"]);
  console.log(isort.choice());
  isort.choose(-1);

  console.log(isort.choice());
  isort.choose(1);

  console.log(isort.choice());
  isort.choose(1);
  // --- END TESTING ---
}

window.onload=main;