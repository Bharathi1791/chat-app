const chatRouter = require('express').Router();
const { chats } = require('../controllers');

chatRouter.get('/messages', chats.getChats);

module.exports = chatRouter;
