const { app } = require('electron');

class Controler {
  constructor(model) {
    this.model = model;
    app.on('ready', () => {
      model.setElectronReady();
    });
  }
}

module.exports = Controler;
