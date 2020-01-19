DROP TABLE IF EXISTS "users"
CASCADE;
DROP TABLE IF EXISTS "chats"
CASCADE;

SET timezone
= "Europe/Stockholm";

CREATE TABLE "users"
(
  id SERIAL NOT NULL PRIMARY KEY,
  nick_name TEXT NOT NULL UNIQUE,
  active boolean not null default true,
  created_date TIMESTAMP default current_timestamp
);


CREATE TABLE "chats"
(
  id SERIAL PRIMARY KEY,
  message VARCHAR,
  user_id INTEGER,
  timestamp timestamp default current_timestamp,
  FOREIGN KEY (user_id) REFERENCES "users"(id)
);