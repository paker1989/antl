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
];
