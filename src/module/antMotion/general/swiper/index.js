import React from "react";
import Demo from './swiper';
import Custom from './swiper.custom';

import './swiper.less';

export default () => {
  return (
    <div className="swiper-demo-container">
      <Custom />
      {/* <Demo/> */}
    </div>
  )
}