# chat-app
This is an application for chatting with multiple users in a chatroom. It developed for Ubiquiti - Simplifying IT.

## Technologies used
### Backend
* Node.js
* Express.js
* Postgresql
* Socket.io (for chat functionality)

### Front-end
* React (bootstrapped through Create React App)
* React Styled Components
* React Router DOM

## Run application
To run the application, create a postgresql database named 'chat and change the username, password in server/db/pool.js file.
Install all dependencies. Then run resetDb.sql file from the server/db/migration folder to create tables in database, followed by 'npm run start:server, npm run start:client'. You should be able to access to project from http://localhost:3000.

  
