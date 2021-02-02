const router = require('express').Router();
const authRouter = require('./auth')

router.get('/', (req, res) => {
  return res.send('server side here');
});

router.use('/', authRouter);

module.exports = router;