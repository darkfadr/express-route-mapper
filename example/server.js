const express = require('express');
const Router = require('../lib');
const app = express();
const temp = (req, res) => res.json({status: 'success', msg: 'Method not yet implemented'});

const routes = new Router('./controllers');
routes.map({
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
})


app.use('api', api);
app.listen(4000, () => console.log('Sample app is up an running on port: 4000'));