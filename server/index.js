require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/app');
const router = require('./router');

const app = express();

const port = config.appPort;

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});