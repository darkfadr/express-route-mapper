import fs from 'fs';
import path from 'path';

const not_implemented_handler = (req, res) => res.json({status: 'success', msg: 'Route not properly bound or method is not yet implemented'});
const http_actions = ['checkout', 'copy', 'delete', 'get', 'head', 'lock', 'merge', 'mkactivity', 'mkcol',
'move', 'm-search', 'notify', 'options', 'patch', 'post', 'purge', 'put', 'report', 'search', 'subscribe',
'trace', 'unlock', 'unsubscribe'];

const register_modules = controllers => {
  const resgistry = {};
  controllers.forEach(controller =>
    resgistry[controller.constructor.name] = controllers);
  return resgistry
}


export function parse_string(handler = ''){
  const http = handler.split(' ');
  const action = http[0].toLowerCase();
  //check that method is valid
  return (http_actions.includes(action) && http.length === 2)
  	&& {action, handler: http[1]} || null;
}
//loads controllers, ignores 'index.js'
export function load_modules(dir) {
  return new Promise ((resolve, reject) => {
    const imports = fs.readdirSync(path.join(__dirname, dir))
      .filter(file => file.endsWith('.js') && !file.startsWith('index'))
      .map(file => import(path.join(__dirname, dir, file)));

    Promise.all(imports)
      .then(ctrls => {
        const rgstry = register_modules(ctrls);
        resolve(rgstry);
      })
      .catch(reject);
  });
}