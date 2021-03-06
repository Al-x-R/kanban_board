const { Card, Column, BoardActivities, CardActivities } = require('../models');

exports.createCard = async (req, res) => {
  const { body, params: { boardId }, user: {email} } = req;

  try {
    const card = await Card.create({
      ...body,
      boardId,
    });

    const column = await Column.findOne({
      where: {
        boardId,
        id: body.columnId
      }
    })

    await CardActivities.create({
      cardId: card.id,
      action: `${email} add this card to ${column.name}`
    })

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

    const updatedCard = await card.update(body);

    if (body.description) {
      await CardActivities.create({
        cardId,
        user: email,
        action: `add description`
      })

      await BoardActivities.create({
        boardId,
        user: email,
        action: `add description to ${updatedCard.name}`
      })
    }
    res.status(200).send(updatedCard);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.removeCard = async (req, res) => {
  const { params: { boardId, cardId }, user: {email} } = req;

  try {
    const card = await Card.findOne({
      where: {
        boardId,
        id: cardId,
      },
    });

    await BoardActivities.create({
      boardId,
      user: email,
      action: `del card ${card.name}`,
    });

    await card.destroy();

    res.status(200).send({ message: `the column ${card.name} has been removed` });

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};
