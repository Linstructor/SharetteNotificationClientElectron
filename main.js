const io = require('socket.io-client');
const View = require('./view/view');
const Controler = require('./controler/controler');
const Model = require('./model/model');

const model = new Model();
const controler = new Controler(model);
const view = new View(controler);
view.setListener(model);

// let win;
// const tray = null;
// const socket = io('http://127.0.0.1:3001', { autoConnect: false, timeout: 5000, /* parser : jsonParser, */ reconnectionAttempts: 3 });
// socket.on('connect', () => console.log('connected'));

