const cardRouter = require('express').Router()
const {cardCreate, getCards} = require('../controllers/cardController')

cardRouter.post('/card', cardCreate)
cardRouter.get('/card/:id', getCards)
cardRouter.patch('/card/:id')
cardRouter.delete('/card/:id')

module.exports = cardRouter