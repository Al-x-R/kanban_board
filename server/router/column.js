const columnRouter = require('express').Router();
const { createColumn, getColumns, removeColumn, updateColumn } = require('../controllers/columnController');

columnRouter.post('/boards/:boardId/columns', createColumn);
columnRouter.get('/boards/:boardId/columns', getColumns);
columnRouter.delete('/boards/:boardId/columns/:columnId', removeColumn);
columnRouter.patch('/boards/:boardId/columns/:columnId', updateColumn);

module.exports = columnRouter;