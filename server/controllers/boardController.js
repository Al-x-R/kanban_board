const { Board } = require('../models');

exports.boardCreate = async (req, res) => {
  try {
    const { body } = req;
    const board = await Board.create(body);
    return res.status(201).send(board);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.boardsGetAll = async (req, res) => {
  try {
    const boards = await Board.findAll({
      where: {
        userId: req.user.id,
      },
    });

    return res.status(200).send(boards);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.boardGetById = async (req, res) => {
  try {
    const board = await Board.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!board) {
      return res.status(404).send({ message: 'Board not found' });
    }

    return res.status(200).send(board);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.boardRemoving = async (req, res) => {
  try {
    const board = await Board.findOne({
      where: {
        id: req.params.id,
      },
    });

    await board.destroy();
    res.status(200).send({ message: `the board ${board}  has been removed` });

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};