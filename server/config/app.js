require('dotenv').config();

module.exports = {
  appUrl: process.env.APP_URL,
  appPort: process.env.APP_PORT,
  saltRound: process.env.SALT
};