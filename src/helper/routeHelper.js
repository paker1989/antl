

export function getFullPath(link) {
    console.log(`/comp/${link}`);
    return `/comp/${link}`;
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