const pool = require('../db/pool');

const add = (message, userId) =>
  pool
    .query('INSERT INTO "chats" (message, user_id) VALUES ($1, $2) RETURNING user_id, timestamp',
      [message, userId])
    .then(res => res.rows[0])
    .catch(console.error);

const get = () =>
  pool
    .query(`SELECT c.id, c.message, c.timestamp, u.nick_name, u.active FROM "chats" AS c
            LEFT JOIN "users" AS u ON u.id=c.user_id
            ORDER BY timestamp ASC`)
    .then(res => res.rows)
    .catch(console.error);

module.exports = {
  add,
  get,
};
