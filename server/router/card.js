const cardRouter = require('express').Router();
const { createCard, getCards, updateCardById, removeCard } = require('../controllers/cardController');

cardRouter.get('/boards/:boardId/cards', getCards);
cardRouter.post('/boards/:boardId/cards', createCard);
cardRouter.delete('/boards/:boardId/cards/:cardId', removeCard);
cardRouter.patch('/boards/:boardId/cards/:cardId', updateCardById);

module.exports = cardRouter;
