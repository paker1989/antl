only files inside *src* are processed by webpack. You need to put any JS and CSS files inside src,
Only files inside *public* can be used from public/index.html.



## develop components in isolation:
`storybook`, `styleguildlist`(文档编写工具)

- `styleguildlist`:
```
npm install --save react-styleguidist

** add in package.json
"scripts": {
    "styleguide": "styleguidist server",
    "styleguide:build": "styleguidist build",
     "start": "react-scripts start",

npm run styleguide
``` 

## Analyze bundle size
```
npm install --save source-map-explorer

"scripts": {
+    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",

npm run build
npm run analyze
```


## Template
- ts:
  npx create-react-app my-app --template typescript