const pool = require('../db/pool');

const addUser = (nickname) =>
  pool
    .query('INSERT INTO users (nick_name, active) VALUES ($1, $2) RETURNING id, nick_name, active, created_date',
      [nickname, true])
    .then(res => res.rows[0])
    .catch(console.error);

const getUser = (nickname) =>
  pool
    .query('SELECT * from users where nick_name=$1', [nickname])
    .then(res => res.rows[0])
    .catch(console.error);

const getUserById = (id) =>
  pool
    .query('SELECT * from users where id=$1', [id])
    .then(res => res.rows[0])
    .catch(console.error);

const getUsers = () =>
  pool
    .query('SELECT * from users')
    .then(res => res.rows)
    .catch(console.error);

module.exports = {
  addUser,
  getUser,
  getUserById,
  getUsers,
};
