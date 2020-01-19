
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { users, chats } = require('./routers');

const app = express();
app.use(express.static(path.join('client', 'build')));

// * EXPRESS MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTER PATH
app.use('/api/user', users);
app.use('/api/chats', chats);

// * REACT APPLICATION ROUTE
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = app;
