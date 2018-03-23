const path = require('path');
const url = require('url');
const { Menu, BrowserWindow, Tray } = require('electron');

const debug = true;

class View {
  View(controler) {
    this.controler = controler;
    this.managerTray = undefined;
    this.win = undefined;
    this.notifTrays = [];
  }

  createTray(options = {}) {
    const tray = new Tray(options.icon ? options.icon : 'view/public/assets/icon_none.png');
    const view = this;
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Open notification center', click() { view.createWindow('index.html'); }, icon: 'view/public/assets/new_notif.png' },
      { type: 'separator' },
      { label: 'Quit', id: 'quit', click() { this.controler.quit(); } },
    ]);

    tray.setToolTip('Notification center');
    tray.setContextMenu(contextMenu);
    tray.on('double-click', () => {
      view.createWindow('index.html');
    });
    return tray;
  }

  createWindow(page = 'loading.html', width = 800, height = 800) {
    if (this.win === undefined) return this.win.focus();

    this.win = new BrowserWindow({
      title: 'Mobile Notification Center',
      backgroundColor: '#212121',
      width,
      height,
    });

    if (debug) this.win.webContents.openDevTools();
    this.win.loadURL(url.format({
      pathname: path.join(`${__dirname}/public/html/`, page),
      protocol: 'file:',
      slashes: true,
    }));

    // Emitted when the window is closed.
    return this.win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      this.win = undefined;
    });
  }

  setListener(model) {
    model.on('ready', () => { this.createTray();/* this.createWindow(800,900,'loading.html') */ });
  }
}

module.exports = View;
