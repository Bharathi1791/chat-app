const userRouter = require('express').Router();
const { users } = require('../controllers');

userRouter.get('/login', users.login);
userRouter.get('/:id', users.getUser);

module.exports = userRouter;
