const { users } = require('../api');

const getUser = async (req, res) => {
  const findUser = await users.getUserById(req.params.id);
  res.send(JSON.stringify(findUser));
};

const login = async (req, res) => {
  const { nickname } = req.query;
  const findUser = await users.getUser(nickname);
  if (findUser !== undefined) {
    res.status(409).send(JSON.stringify(findUser));
  } else {
    const user = await users.addUser(nickname);
    res.status(200).send(JSON.stringify(user));
  }
};

module.exports = {
  login,
  getUser,
};
