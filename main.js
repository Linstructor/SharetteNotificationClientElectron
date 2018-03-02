const {app, BrowserWindow, Menu, Tray} = require('electron');
const path = require('path');
const url = require('url');
const log = require('electron-log');
const jsonParser = require('socket.io-json-parser');
const io = require('socket.io-client');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let tray = null;
const manager = new io.Manager('http://127.0.0.1:3001', {autoConnect: false, timeout: 5000, parser : jsonParser, reconnectionAttempts: 3});
const socket = io('http://127.0.0.1:3001', {autoConnect: false, timeout: 5000, parser : jsonParser, reconnectionAttempts: 3});
socket.on('connection_error', () => console.log('error'));
socket.on('connection_timeout', () => console.log('timeout'));
socket.on('connect', () => console.log('connected'));
function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));


    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    log.info('Electron is Ready');
    createTray();
    socket.open();
});

function createTray(){
    tray = new Tray('assets/icon_none.png');
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Open notification center', click(menuItem, browser, event) {createWindow()}, icon: 'assets/new_notif.png'},
        {type: 'separator'},
        {label: 'Quit', id: 'quit', click() {quit()}}
    ]);
    tray.setToolTip('lalal');
    tray.setContextMenu(contextMenu);
    tray.on('double-click', () => {
        win !== null ? win.focus() : createWindow();
    })
}

function quit(){
    if (socket !== null){
        socket.close();
    }
    if (process.platform !== 'darwin') {
        log.info('Closing application');
        app.quit()
    }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.