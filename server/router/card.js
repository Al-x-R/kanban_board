const cardRouter = require('express').Router()
const {cardCreate, getCards, updateCard} = require('../controllers/cardController')

cardRouter.post('/card', cardCreate)
cardRouter.get('/card/:id', getCards)
cardRouter.patch('/card/:id', updateCard)
cardRouter.delete('/card/:id')

module.exports = cardRouter