const cardRouter = require('express').Router();
const {
  createCard,
  getCards,
  updateCardById,
  removeCard,
} = require('../controllers/cardController');
const {
  cardCreationAction,
  moveCardBoardAction,
  moveCardCardAction,
} = require('../middleware/activities');

cardRouter.get('/boards/:boardId/cards', getCards);
cardRouter.post('/boards/:boardId/cards', cardCreationAction, createCard);
cardRouter.delete('/boards/:boardId/cards/:cardId', removeCard);
cardRouter.patch('/boards/:boardId/cards/:cardId', moveCardBoardAction, moveCardCardAction, updateCardById);

module.exports = cardRouter;
