const columnRouter = require('express').Router()
const {columnCreate, getColumns} = require('../controllers/columnController')

columnRouter.post('/column', columnCreate)
columnRouter.get('/column/:id', getColumns)
columnRouter.patch('/column')
columnRouter.delete('/column')

module.exports = columnRouter