const columnRouter = require('express').Router();
const { columnCreate, getColumns, removeColumn } = require('../controllers/columnController');

columnRouter.post('/column', columnCreate);
columnRouter.get('/column/:id', getColumns);
columnRouter.delete('/column/:id', removeColumn);
columnRouter.patch('/column');

module.exports = columnRouter;