const defaultConfig = {
  clientPort: 3000,
  serverPort: 8000,
  databaseUser: "me",
  databasePassword: "password",
  databaseName: "chat",
  databasePort: 5432,
  rootPath: process.env.PWD,
  clientHost: 'http://localhost:3000',
};

const testConfig = {
  ...defaultConfig,
  clientPort: 3001,
  serverPort: 8001,
};

module.exports = {
  development: defaultConfig,
  test: testConfig,
};
