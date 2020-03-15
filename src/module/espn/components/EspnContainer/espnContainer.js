import React from "react";
import { StickyContainer } from "react-sticky";

import PlayerDescription from "./PlayerDescription/playerDesc";
import PlayerMenu from "./PlayerMenu/playerMenu";
import PlayMain from "./PlayerMain/playerMain";

const menuProps = [
  { title: "Overview", key: "overview", link: "#" },
  { title: "News", key: "news", link: "#" },
  { title: "Stats", key: "stats", link: "#" },
  { title: "Bio", key: "bio", link: "#" },
  { title: "Splits", key: "splits", link: "#" },
  { title: "Game Log", key: "gamelog", link: "#" },
  {
    title: "More",
    key: "more",
    children: [
      { title: "Advanced Stats", key: "ad-stats", link: "#" },
      { title: "Career Projections", key: "career-prj", link: "#" }
    ]
  }
];

export default () => {
  return (
    <div className="espn-container">
      <PlayerDescription />
      <StickyContainer>
        <PlayerMenu menuProps={menuProps} selectedkeys={["overview"]} />
        <PlayMain />
      </StickyContainer>
    </div>
  );
};
