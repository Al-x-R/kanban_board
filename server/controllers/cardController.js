const { Card, Column, BoardActivities, CardActivities } = require('../models');

exports.createCard = async (req, res) => {
  const { body, params: { boardId }, user: { id, email } } = req;

  try {
    const card = await Card.create({
      ...body,
      boardId,
    });

    res.status(201).send(card);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.getCards = async (req, res) => {
  try {
    const cards = await Card.findAll({
      where: {
        boardId: req.params.boardId,
      },
    });

    return res.status(200).send(cards);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.updateCardById = async (req, res) => {
  const { params: { cardId, boardId }, body, user: { email, id } } = req;

  try {
    const card = await Card.findOne({
      where: {
        id: cardId,
        boardId,
      },
    });

    if (!card) {
      return res.send(404).send({
        message: 'Card not found.',
      });
    }

    const column = await Column.findOne({
      where: {
        id: body.columnId,
      },
    });

    const from = await Column.findOne({
      where: {
        id: body.from,
      },
    });

    const updatedCard = await card.update(body);

    if (body.from) {
      try {
        const action = await BoardActivities.create({
          userId: id,
          boardId,
          columnId: body.columnId,
          cardId,
          action: `${email} move card ${updatedCard.name} form ${from.name} to ${column.name}`,
        });
        res.send(action);

      } catch (e) {
        return res.status(400).send({ message: e.message });
      }

    } else {
      try {
        const action = await BoardActivities.create({
          userId: id,
          boardId,
          columnId: body.columnId,
          cardId,
          action: `${email} add card ${updatedCard.name} to ${column.name}`,
        });
        res.send(action);

      } catch (e) {
        return res.status(400).send({ message: e.message });
      }
    }

    if (body.description) {
      try {
        await CardActivities.create({
          userId: id,
          boardId,
          columnId: body.columnId,
          cardId,
          action: `${email} add description`,
        });
        await BoardActivities.create({
          userId: id,
          boardId,
          columnId: body.columnId,
          cardId,
          action: `${email} add description to ${updatedCard.name} card`,
        })
      } catch (e) {
        return res.status(400).send({ message: e.message });
      }
    }

    res.status(200).send(updatedCard);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.removeCard = async (req, res) => {
  const { params: { boardId, cardId }, user: { email, id } } = req;

  try {
    const card = await Card.findOne({
      where: {
        boardId,
        id: cardId,
      },
    });

    await card.destroy();
    res.status(200).send({ message: `the column ${card} has been removed` });

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};
