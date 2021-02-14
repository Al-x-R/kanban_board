const borderRouter = require('express').Router();
const { auth } = require('../middleware/auth');
const { boardCreate, boardsGetAll, boardGetById, boardRemoving } = require('../controllers/boardController');

borderRouter.post('/boards', [auth], boardCreate);
borderRouter.get('/boards', [auth], boardsGetAll);
borderRouter.get('/boards/:id', [auth], boardGetById);
borderRouter.delete('/boards/:id', [auth], boardRemoving);

module.exports = borderRouter;