# IS-Logging JavaScript Client 

This repo contains a library using Rollup.

We're creating a library called `lumberjack`, which usefully allows us to cleanly do client-side logging and have those logs integrated with :

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 8+ ✔ |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

## Installing 
```bash
$ yarn add express-route-mapper
```

## Example
```js
import Router from 'express-route-mapper';

const router = new Router('./contoller_dir');
router.map({
  '/user': { get: temp },
  'user/:id': [
  	'GET UserController.view',
  	'POST UserController.create',
  	'PUT UserController.update',
  	'Delete UserController.delete'
  ],
  '/session': {get: temp,},
  '/session/:id': {
    get: temp,
    post: temp,
    put: temp
  },
  '/sessions': 'POST SessionController.create',
});
```

## Build
Clone this repository and install its dependencies:
```bash
git clone http://devgit.dev.us.corp:7990/scm/isd/is-logging-client-js.git
cd is-logging-client-js
npm install
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/lumberjack.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/lumberjack.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/lumberjack.min.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`npm test` builds the library, then tests it.

*Note that you would often include the `dist` folder in your [.gitignore](https://github.com/rollup/rollup-starter-lib/blob/master/.gitignore) file, but they are included here for ease of illustration.*


## Author
<img src="http://devgit.dev.us.corp:7990/users/ashleyn/avatar.png" width="70" style="border-radius: 100%"/> Ashley Narcisse
