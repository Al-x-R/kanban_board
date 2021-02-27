const { Column } = require('../models');

exports.createColumn = async (req, res) => {
  const { body } = req;

  try {
    const column = await Column.create(body);
    return res.status(201).send(column);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.getColumns = async (req, res) => {
  const { params: { boardId } } = req;

  try {
    const columns = await Column.findAll({
      where: {
        boardId: boardId,
      },
    });

    return res.status(200).send(columns);

  } catch (e) {
    return res.status(404).send({ message: e.message });
  }
};

exports.removeColumn = async (req, res) => {
  const { params: { boardId, columnId } } = req;

  try {
    const column = await Column.findOne({
      where: {
        boardId,
        id: columnId,
      },
    });

    await column.destroy();
    res.status(200).send({ message: `the column ${column}  has been removed` });

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.updateColumn = async (req, res) => {
  const { params: { boardId, columnId }, body } = req;

  try {
    const column = await Column.findOne(body, {
      where: {
        boardId,
        id: columnId,
      },
    });

    if (!column) {
      return res.status(404).send({
        message: 'Column not found.',
      });
    }

    const updatedColumn = await column.update(body);
    res.status(200).send(updatedColumn);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};