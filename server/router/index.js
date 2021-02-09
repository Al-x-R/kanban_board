const router = require('express').Router();
const authRouter = require('./auth');
const borderRouter = require('./board');

router.get('/', (req, res) => {
  return res.send('server side here');
});

router.use('/', authRouter);
router.use('/', borderRouter);

module.exports = router;