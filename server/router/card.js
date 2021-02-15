const cardRouter = require('express').Router()
const {cardCreate} = require('../controllers/cardController')

cardRouter.post('/card', cardCreate)
cardRouter.get('/card/:id')
cardRouter.patch('/card/:id')
cardRouter.delete('/card/:id')

module.exports = cardRouter