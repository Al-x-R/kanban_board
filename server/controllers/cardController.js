const { Card } = require('../models');

exports.cardCreate = async (req, res) => {
  try {
    const { body } = req;
    const card = await Card.create(body);
    return res.status(201).send(card);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.getCards = async (req, res) => {
  try {
    const cards = await Card.findAll({
      where: {
        boardId: req.params.id,
      },
    });

    return res.status(200).send(cards);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.updateCard = async (req, res) => {
  const { params: { id }, body } = req;
  try {
    const [rows, [result]] = await Card.update(body, {
      where: {
        id: id,
      },
      returning: true
    });

    if (rows) {
      return res.status(200).send({
        card: result
      })
    }
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};