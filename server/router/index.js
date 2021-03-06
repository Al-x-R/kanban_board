const router = require('express').Router();
const authRouter = require('./auth');
const cardRouter = require('./card');
const borderRouter = require('./board');
const columnRouter = require('./column');
const commentRouter = require('./comment')
const activitiesRouter = require('./activities')

const { auth } = require('../middleware/auth');

router.get('/', (req, res) => {
  return res.send('server side here');
});

router.use('/', authRouter);
router.use(auth);
router.use('/', borderRouter);
router.use('/', columnRouter);
router.use('/', cardRouter);
router.use('/', activitiesRouter);
router.use('/', commentRouter);

module.exports = router;
