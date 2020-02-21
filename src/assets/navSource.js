import  { lazy } from 'react';

// const LazyLoading = (path) => {
//     return (
//         <Suspense fallback={<div>Laoding...</div>}>
//             {lazy(() => import(path))}
//         </Suspense>
//     )
// }


export default [
    {
        "title": "Menu",
        "link": "menu",
        "source": lazy(() => import('../components/Container/Menu/menu'))
        // "source": LazyLoading('../components/Container/Menu/menu').type
    },
    {
        "title": "Breadcrumb",
        "link": "breadcrumb",
        "source": lazy(() => import('../components/Container/Breadcrumb/breadcrumb')),
        // "source": LazyLoading('../components/Container/Breadcrumb/breadcrumb').type
    },
    {
        "title": "Form components",
        "link": "formComponent",
        "source": lazy(() => import('../components/Container/FormComponent/FormComponent')),
        // "source": LazyLoading('../components/Container/Breadcrumb/breadcrumb').type
    }
]