
This repo contains a library using Rollup.



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
npm install
```

`npm run build` builds the library to `dist`, generating three files:

