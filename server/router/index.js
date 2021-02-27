const router = require('express').Router();
const authRouter = require('./auth');
const borderRouter = require('./board');
const columnRouter = require('./column');
const cardRouter = require('./card');
const { auth } = require('../middleware/auth');

router.get('/', (req, res) => {
  return res.send('server side here');
});

router.use('/', authRouter);
router.use(auth);
router.use('/', borderRouter);
router.use('/', columnRouter);
router.use('/', cardRouter);

module.exports = router;
