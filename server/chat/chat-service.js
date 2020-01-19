const { chats } = require('../controllers');

const chatHandler = (io) => (socket) => {
  console.debug(`User ${socket.id} Connected.`);

  socket.on('disconnect', () => {
    console.debug('user disconnected');
  });
  socket.on('manual-disconnection', async ({ socketId, userId }) => {
    if (io.sockets.connected[socketId]) {
      io.emit('left chat', userId);
      io.sockets.connected[socketId].disconnect();
    }
  });
  socket.on('chat message', async ({ message, userId }) => {
    const addChat = await chats.addChat(message, userId);
    io.emit('received message', addChat);
  });
};

module.exports = chatHandler;
