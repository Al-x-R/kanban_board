const commentRouter = require('express').Router();
const {
  getComments,
  createComment,
  updateComment,
  removeComment,
} = require('../controllers/commentController');

commentRouter.get('/boards/:id/cards/:cardId/comments', getComments);
commentRouter.post('/boards/:boardId/cards/:cardId/comments', createComment);
commentRouter.patch('/boards/:id/cards/:cardId/comments', updateComment);
commentRouter.delete('/boards/:id/cards/:cardId/comments/:commentId', removeComment);

module.exports = commentRouter;