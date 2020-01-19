require('./config');
const http = require('http');
const chatHandler = require('./server/chat/chat-service');
const app = require('./server/app');


const server = http.createServer(app);

// eslint-disable-next-line import/order
const io = require('socket.io')(server);

io.on('connection', chatHandler(io));

server.on('listening', () => console.debug('ok, server is running'));
server.listen(8000);

module.exports = server;
