import { lazy } from "react";

export default {
  one: [
    {
      title: "one-basic",
      link: "basic",
      source: lazy(() => import("../module/antMotion/one/basic/basic")),
    },
    {
      title: "one-statistic",
      link: "statistic",
      source: lazy(() => import("../module/antMotion/one/statistic/statistic")),
    },
    {
      title: "one-svg",
      link: "svg",
      source: lazy(() => import("../module/antMotion/one/svg/svg")),
    },
  ],
  css: [
    {
      title: "css-basic",
      link: "basic",
      source: lazy(() => import("../module/antMotion/css/basic/basic")),
    },
  ],
  queue: [
    {
      title: "queue-basic",
      link: "basic",
      source: lazy(() => import("../module/antMotion/queue/basic/basic")),
    },
    {
      title: "queue-addremove",
      link: "addremove",
      source: lazy(() =>
        import("../module/antMotion/queue/addremove/addremove")
      ),
    },
    {
      title: "queue-animConfig",
      link: "animConfig",
      source: lazy(() =>
        import("../module/antMotion/queue/animConfig/animConfig")
      ),
    },
    {
      title: "queue-finalDemo",
      link: "finalDemo",
      source: lazy(() =>
        import("../module/antMotion/queue/finalDemo/finalDemo")
      ),
    },
  ],
  text: [
    {
      title: "text-basic",
      link: "basic",
      source: lazy(() => import("../module/antMotion/text/text")),
    },
  ],
  scroll: [
    {
      title: "scroll-basic",
      link: "basic",
      source: lazy(() => import("../module/antMotion/scroll/scroll")),
    },
  ],
  banner: [
    {
      title: "banner-basic",
      link: "basic",
      source: lazy(() => import("../module/antMotion/banner/basic")),
    },
    {
      title: "banner-custom",
      link: "custom",
      source: lazy(() => import("../module/antMotion/banner/custom")),
    },
    {
      title: "banner-customArrow",
      link: "customArrow",
      source: lazy(() => import("../module/antMotion/banner/customArrow")),
    },
  ],
  general: [
    {
      title: "general-switchImage",
      link: "switchImage",
      source: lazy(() => import("../module/antMotion/general/switchImage")),
    },
    {
      title: "general-addList",
      link: "addList",
      source: lazy(() => import("../module/antMotion/general/addList/addDivList")),
    },
    {
      title: "general-swiper",
      link: "swiper",
      source: lazy(() => import("../module/antMotion/general/swiper")),
    },
  ],
};
