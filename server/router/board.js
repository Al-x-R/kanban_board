const borderRouter = require('express').Router();
const { boardCreate, boardsGetAll, boardGetById, boardRemoving } = require('../controllers/boardController');

borderRouter.post('/boards', boardCreate);
borderRouter.get('/boards', boardsGetAll);
borderRouter.get('/boards/:id', boardGetById);
borderRouter.delete('/boards/:id', boardRemoving);

module.exports = borderRouter;
