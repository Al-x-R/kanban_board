const { BoardActivities, CardActivities } = require('../models');

exports.getBoardActivities = async (req, res) => {
  const { params: { id } } = req;

  try {
    const activities = await BoardActivities.findAll({
      where: {
        boardId: id,
      },
    });

    res.status(200).send(activities);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.getCardActivities = async (req, res) => {
  const { params: { id, cardId } } = req;

  try {
    const activities = await CardActivities.findAll({
      where: {
        boardId: id,
        id: cardId,
      },
    });

    res.status(200).send(activities);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }

};