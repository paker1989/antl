

export function getFullPath(link) {
    return `/${link}`;
}

// export function renderComponent(match, data) {
//     const { path, source } = data;
//     return (
//         <Route
//             key={`route-${path}`}
//             path={getFullPath(match, path)}
//             component={source}
//         />
//     );
// }