
// const _ANIMATE_PREFIX = 'animate';

export function getFullPath(prefix, link) {
    // console.log(`/${prefix}/${link}`);
    return `/${prefix}/${link}`;
}

// export function getFullAnimatePath(tabKey, link) {
//     return `/${_ANIMATE_PREFIX}/${tabKey}/${link}`;
// }

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