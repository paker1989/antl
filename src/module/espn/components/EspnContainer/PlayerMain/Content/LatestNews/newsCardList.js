import React from "react";
import { Icon } from "antd";
import NewsCard from "./newsCard";

import './latestNews.less';

export default ({ newsCardProps }) => {
  return (
    <div className="news-wrapper">
      {newsCardProps.map((item, index) => (
        <NewsCard key={`news-card-${index}`} {...item} />
      ))}
      {/* <Icon type="arrow-right" className="arrow right"/>
      <Icon type="arrow-right" className="arrow left"/> */}
    </div>
  );
};
