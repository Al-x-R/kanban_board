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