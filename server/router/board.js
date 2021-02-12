const borderRouter = require('express').Router();
const { auth } = require('../middleware/auth');
const { boardCreate, boardsGetAll, boardGetById } = require('../controllers/boardController');

borderRouter.post('/boards', [auth], boardCreate);
borderRouter.get('/boards', [auth], boardsGetAll);
borderRouter.get('/board/:id', [auth], boardGetById)

module.exports = borderRouter;