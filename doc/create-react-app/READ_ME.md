only files inside _src_ are processed by webpack. You need to put any JS and CSS files inside src,
Only files inside _public_ can be used from public/index.html.

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

- build-in support of `autoprefixer`

## load `svg` file: (https://create-react-app.dev/docs/adding-images-fonts-and-files/)

```
import { ReactComponent as Logo } from './logo.svg'

return (
  <Logo>
);
```

## public_url

If you put a file into the public folder, it will _not_ be processed by webpack.
To reference assets in the public folder, you need to use an environment variable called _PUBLIC_URL_.

```
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

Only files inside the public folder will be accessible by %PUBLIC_URL% prefix. If you need to use a file from src or node_modules, you’ll have to copy it there to explicitly specify your intention to make this file a part of the build.

In JavaScript code, you can use process.env.PUBLIC_URL for similar purposes:

## code splitting

```
const About = lazy(() => import('./routes/About'));
```

## absolute import

`jsconfig.json` \ `tsconfig.json`:

```
  {
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
  }
```
然后
```
 import Button from 'components/Button';
```

## Flow
`flow`: 静态类型检测器 - *to check, seems useful*

## add a router
```
npm install --save react-router-dom
```

## some new concepts

`css reset`: https://juejin.im/post/5bbedfca5188255c5e670682

## 
You must create custom environment variables beginning with `REACT_APP_`. 
hese environment variables will be defined for you on `process.env`.
You can also access the environment variables starting with REACT_APP_ in the `public/index.html`. For example:
```
<title>%REACT_APP_WEBSITE_NAME%</title>
```
- Adding Temporary Environment Variables In Your Shell:
  cmd:
  ```
    set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start
  ```
  powershell:
  ```
    ($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
  ```
  Bash:
  ```
    REACT_APP_NOT_SECRET_CODE=abcdef npm start
  ```

- What other .env files can be used?
`.env.development`, `.env.development.local`, `.env.local`, ``.env`

- PWA:
  - change `serviceWorker.unregister()` to `serviceWorker.register()`
  - rvice workers require `HTTPS`,
  - `public\manifest.json` (https://web.dev/add-manifest/)

## production build
- When running a production build of freshly created Create React App application, there are a number of .js files (called chunks) that are generated and placed in the `build/static/js` directory: `main.[hash].chunk.js`
- 总共3部分:
  `main.[hash].chunk.js`: App.js, etc.
  `[number].[hash].chunk.js`: vendors
  `runtime-main.[hash].js`: his is a small chunk of webpack runtime logic which is used to load and run your application. The contents of this will be embedded in your build/index.html file by default to save an additional network request.
  ()If you're using code splitting to split up your application, this will create additional chunks in the build/static folder as well.

  To deliver the best performance to your users, it's best practice to specify a Cache-Control header for index.html,