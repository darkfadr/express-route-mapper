import express from 'express';
import {load_modules} from './utils';

export default class Router {
  constructor(dest){
    this.controller_dest = dest;
    this.router = express.Router();
  }
  map(routes){
    routes && Object.keys(routes).forEach(path => {
      //check for action
      const route = this.router.route(path);
      Object.keys(routes[path]).forEach((i, action) => {
        console.log(`${i})   p: ${path}, a:${action} `)
        // route[action](routes[path][action]))
      });
    });
  }
}

// '/user/:id': { get: UserController.findById },
// 'GET /user/:id/stats': SessionController.stats,
// 'GET /user/:id/stats': 'SessionController.stats'
// '/sessions':[
//    'GET SessionController.stats'
//    'POST SessionController.stats'
//    'PUT SessionController.stats'
// ]

