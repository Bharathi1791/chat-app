const { users, chats } = require('../api');

const addChat = async (message, userId) => {
  const addMessage = await chats.add(message, userId);
  const user = await users.getUserById(addMessage.user_id);
  return {
    message,
    nickname: user.nick_name,
    timestamp: addMessage.timestamp,
  };
};

const getChats = async (_req, res) => {
  const allMessages = await chats.get();
  res.send(allMessages);
};

module.exports = {
  addChat,
  getChats,
};
