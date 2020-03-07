import { lazy } from "react";

// const LazyLoading = (path) => {
//     return (
//         <Suspense fallback={<div>Laoding...</div>}>
//             {lazy(() => import(path))}
//         </Suspense>
//     )
// }

export default [
  {
    title: "Menu",
    link: "menu",
    source: lazy(() => import("../components/Container/Menu/menu"))
    // "source": LazyLoading('../components/Container/Menu/menu').type
  },
  {
    title: "Breadcrumb",
    link: "breadcrumb",
    source: lazy(() => import("../components/Container/Breadcrumb/breadcrumb"))
    // "source": LazyLoading('../components/Container/Breadcrumb/breadcrumb').type
  },
  {
    title: "Form components",
    link: "formComponent",
    source: lazy(() =>
      import("../components/Container/FormComponent/FormComponent")
    )
    // "source": LazyLoading('../components/Container/Breadcrumb/breadcrumb').type
  },
  {
    title: "Pagination",
    link: "pagination",
    source: lazy(() => import("../components/Container/Pagination/pagination"))
  },
  {
    title: "Input",
    link: "input",
    source: lazy(() => import("../components/Container/Input/input"))
  },
  {
    title: "Card",
    link: "card",
    source: lazy(() => import("../components/Container/Card/card"))
  },
  {
    title: "Comment",
    link: "comment",
    source: lazy(() => import("../components/Container/Comment/comment"))
  },
  {
    title: "Select",
    link: "select",
    source: lazy(() => import("../components/Container/Select/select"))
  },
  {
    title: "Drawer",
    link: "drawer",
    source: lazy(() => import("../components/Container/Drawer/drawer"))
  },
  {
    title: "Empty",
    link: "empty",
    source: lazy(() => import("../components/Container/Empty/empty"))
  },
  {
    title: "Collapse",
    link: "collapse",
    source: lazy(() => import("../components/Container/Collapse/collapse"))
  },
  {
    title: "Popover 气泡",
    link: "popover",
    source: lazy(() => import("../components/Container/Popover/popover"))
  },
  {
    title: "Slider",
    link: "slider",
    source: lazy(() => import("../components/Container/Slider/slider"))
  },
  {
    title: "Cascader",
    link: "cascader",
    source: lazy(() => import("../components/Container/Cascader/cascader"))
  },
  {
    title: "Carousel",
    link: "carousel",
    source: lazy(() => import("../components/Container/Carousel/carousel"))
  },
  {
    title: "List 列表",
    link: "list",
    source: lazy(() => import("../components/Container/List/list"))
  },
  {
    title: "Descriptions",
    link: "description",
    source: lazy(() =>
      import("../components/Container/Description/description")
    )
  },
  {
    title: "Statistic",
    link: "statistic",
    source: lazy(() => import("../components/Container/Statistic/statistic"))
  },
  {
    title: "Upload",
    link: "upload",
    source: lazy(() => import("../components/Container/Upload/upload"))
  },
  {
    title: "Table",
    link: "table",
    source: lazy(() => import("../components/Container/Table/table"))
  },
  {
    title: "PageHeader 页头",
    link: "pageHeader",
    source: lazy(() => import("../components/Container/PageHeader/pageHeader"))
  },
  {
    title: "Tabs",
    link: "tabs",
    source: lazy(() => import("../components/Container/Tab/tab"))
  },
  {
    title: "Anchor",
    link: "anchor",
    source: lazy(() => import("../components/Container/Anchor/anchor"))
  },
  {
    title: "Notification",
    link: "notification",
    source: lazy(() =>
      import("../components/Container/Notification/notification")
    )
  },
  {
    title: "Result",
    link: "result",
    source: lazy(() => import("../components/Container/Result/result"))
  },
  {
    title: "Modal",
    link: "modal",
    source: lazy(() => import("../components/Container/Modal/modal"))
  },
  {
    title: "Progress",
    link: "progress",
    source: lazy(() => import("../components/Container/Progress/progress"))
  },
  {
    title: "Form",
    link: "form",
    source: lazy(() => import("../components/Container/Form/form"))
  },
  {
    title: 'other component',
    link: 'others',
    source: lazy(() => import("../components/Container/others/others"))
  }
];
