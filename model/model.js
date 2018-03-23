// import {listener} from "../view/view";
const EventEmitter = require('events');

class Model extends EventEmitter {
  Model() {
    this.subscribers = [];
  }

  setElectronReady() {
    this.emit('ready');
  }
}

module.exports = Model;
