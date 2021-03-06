const { Card, Column, BoardActivities, CardActivities } = require('../models');

exports.cardCreationAction = async (req, res, next) => {
  const { params: { boardId }, user: { email }, body: { name, columnId } } = req;

  try {
    const column = await Column.findOne({
      where: {
        boardId,
        id: columnId,
      },
    });

    await BoardActivities.create({
      boardId,
      user: email,
      action: `add new card ${name} to ${column.name}`,
    });

    next();

  } catch (e) {
    next(e);
  }
};

exports.moveCardBoardAction = async (req, res, next) => {
  const { params: { cardId, boardId }, body: { from, columnId }, user: { email, id } } = req;

  try {

    if (from) {
      const card = await Card.findOne({
        where: {
          boardId,
          id: cardId,
        },
      });

      const columnFrom = await Column.findOne({
        where: {
          boardId,
          id: from,
        },
      });

      const columnTo = await Column.findOne({
        where: {
          boardId,
          id: columnId,
        },
      });

      await BoardActivities.create({
        boardId,
        user: email,
        action: `move card ${card.name} from ${columnFrom.name} to ${columnTo.name}`,
      });

    }

    next();

  } catch (e) {
    next(e);
  }
};

exports.moveCardCardAction = async (req, res, next) => {
  const { params: { cardId, boardId }, body: { from, columnId }, user: { email, id } } = req;

  try {

    if (from) {
      const columnFrom = await Column.findOne({
        where: {
          boardId,
          id: from,
        },
      });

      const columnTo = await Column.findOne({
        where: {
          boardId,
          id: columnId,
        },
      });

      await CardActivities.create({
        cardId,
        user: email,
        action: `move this card from ${columnFrom.name} to ${columnTo.name}`,
      });
    }

    next();

  } catch (e) {
    next(e);
  }
};

