import React from "react";
import { Card } from "antd";
import NewsCardList from "./newsCardList";

import "./latestNews.less";

const newsCardProps = [
  {
    coverImg: "https://a.espncdn.com/photo/2017/0704/r227354_1296x518_5-2.jpg",
    footer: "2d. Brian Windhorst",
    content: ` Watch LeBron James, Zion Williamson and more NBA stars in their high
     school ba…`,
     isVideo: true
  },
  {
    coverImg:
      "https://a.espncdn.com/photo/2020/0321/r681173_2_1296x518_5-2.jpg",
    footer: "2d",
    content: ` LeBron's mentality before his epic 2012 game vs. the Celtics`
  },
  {
    coverImg: "https://a.espncdn.com/photo/2020/0317/r680209_767x307_5-2.jpg",
    footer: "Kelly Cohen",
    content: `Here's what athletes are doing around the globe amid the coronavirus outbreak`,
    isVideo: true
  },
  {
    coverImg:
      "https://media.video-cdn.espn.com/motion/2020/0307/dm_200307_NBA_Feature_LeBron_reimagined/dm_200307_NBA_Feature_LeBron_reimagined_default.jpg",
    footer: "16d",
    content: `How LeBron was able to reimagine himself in Year 17`
  },
  {
    coverImg:
      "https://media.video-cdn.espn.com/motion/2020/0314/dm_200314_nba_lebron_watching_kids/dm_200314_nba_lebron_watching_kids_default.jpg",
    footer: "8d",
    content: `LeBron watches his sons put up shots`,
    isVideo: true
  },
  {
    coverImg:
      "https://media.video-cdn.espn.com/motion/2020/0311/dm_200311_NBA_FT_LEBRON_MARBURY712/dm_200311_NBA_FT_LEBRON_MARBURY712_default.jpg",
    footer: "11d",
    content: `Is LeBron a true Laker? Stephen A. responds to Marbury's criticism`
  }
];
export default () => {
  return (
    <Card
      className="espn-card latest-news"
      title="Latest News"
      extra={[<a href="https://nba.com">See All</a>]}
    >
      <NewsCardList newsCardProps={newsCardProps} />
    </Card>
  );
};
