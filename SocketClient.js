const jsonParser = require('socket.io-json-parser');
const io = require('socket.io-client');

const socket = io('http://127.0.0.1:3001', {autoConnect: true, timeout: 5000, parser : jsonParser, reconnectionAttempts: 3});
socket.on('connect', () => console.log('connected'));
socket.on('connect_error', () => console.log('connect_error'));
socket.on('connect_timeout', () => console.log('connect_timeout'));
socket.on('error', () => console.log('error'));
socket.on('disconnect', () => console.log('disconnect'));
socket.on('reconnect', () => console.log('reconnect'));
socket.on('news', (data) => console.log('news '+data));
socket.on('pong', (data) => console.log('pong '+data));
// socket.open();