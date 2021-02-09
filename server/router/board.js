const borderRouter = require('express').Router();
const { auth } = require('../middleware/auth');
const { boardCreate, boardsGetAll } = require('../controllers/boardController');

borderRouter.post('/boards', [auth], boardCreate);
borderRouter.get('/boards', [auth], boardsGetAll);

module.exports = borderRouter;