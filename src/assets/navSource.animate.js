import { lazy } from "react";

export default {
  one: [
    {
      title: "Menu",
      link: "menu",
      source: lazy(() => import("../components/Container/Menu/menu"))
    },
  ]
}