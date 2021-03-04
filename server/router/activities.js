const activitiesRouter = require('express').Router();
const { getBoardActivities, getCardActivities } = require('../controllers/activitiesController');

activitiesRouter.get('/boards/:id/activities', getBoardActivities);
activitiesRouter.get('/boards/:id/cards/:cardId/activities', getCardActivities)
module.exports = activitiesRouter;