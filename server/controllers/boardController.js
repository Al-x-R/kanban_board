const { Board } = require('../models');
const { User } = require('../models');

exports.boardCreate = async (req, res) => {
  try {
    const { body } = req;
    const board = await Board.create(body);
    return res.status(201).send(board);
  } catch (e) {
    return res.status(500).send({ message: 'Something went wrong' });
  }
};

exports.boardsGetAll = async (req, res) => {
  try {
    const boards = await Board.findAll({
      where: { userId: req.user.id },
    });

    return res.status(200).send(boards);
  } catch (e) {
    return res.status(500).send({ message: 'Something went wrong' });
  }
};