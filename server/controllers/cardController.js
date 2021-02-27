const { Card } = require('../models');

exports.createCard = async (req, res) => {
  try {
    const { body, params: { boardId } } = req;
    const card = await Card.create({
      ...body,
      boardId,
    });
    return res.status(201).send(card);

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
  const { params: { cardId, boardId }, body } = req;

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
    res.status(200).send(updatedCard);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};
