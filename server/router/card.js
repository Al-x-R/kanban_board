const cardRouter = require('express').Router()
const {createCard, getCards, updateCardById} = require('../controllers/cardController')

cardRouter.post('/boards/:boardId/cards', createCard)
cardRouter.patch('/boards/:boardId/cards/:cardId', updateCardById)
cardRouter.delete('/boards/:boardId/cards/:cardId')
cardRouter.get('/boards/:boardId/cards', getCards);

module.exports = cardRouter
