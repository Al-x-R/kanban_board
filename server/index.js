require('dotenv').config();
const express = require('express');
const config = require('./config/app');
const router = require('./router');

const app = express();

const port = config.appPort;

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});