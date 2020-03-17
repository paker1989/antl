import React from "react";

import LatestNews from "./latest";
import PreviousGame from "./PreviousGame/previousGame";
import "./content.less";

const latestProps = {
  title: "Status",
  extra: { status: "warning", text: "Day-To-Day" },
  powerby: "Data Provided by Rotowire",
  timing: "4 days ago",
  content: `The NBA announced Wednesday the 2019-20 season has been suspended indefinitely after a player tested positive for COVID-19.`
};

export default () => {
  return (
    <div className="player-content">
      <LatestNews {...latestProps} />
      <PreviousGame />
    </div>
  );
};
