import { lazy } from "react";

export default {
  one: [
    {
      title: "one-basic",
      link: "basic",
      source: lazy(() => import("../module/antMotion/one/basic/basic"))
    },
  ]
}