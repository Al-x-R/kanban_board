const router = require('express').Router();
const authRouter = require('./auth');
const borderRouter = require('./board');
const columnRouter = require('./column');
const cardRouter = require('./card');

router.get('/', (req, res) => {
  return res.send('server side here');
});

router.use('/', authRouter);
router.use('/', borderRouter);
router.use('/', columnRouter);
router.use('/', cardRouter);

module.exports = router;