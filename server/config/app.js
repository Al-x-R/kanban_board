require('dotenv').config();

module.exports = {
  appPort: process.env.APP_PORT,
  saltRound: process.env.SALT,
  tokenSecret: process.env.TOKEN_SECRET,
  tokenExpiresIn: process.env.TOKEN_EXPIRES_IN,
  timezone: process.env.TIME_ZONE,
};
