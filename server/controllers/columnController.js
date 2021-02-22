const { Column } = require('../models');

exports.columnCreate = async (req, res) => {
  try {
    const { body } = req;
    const column = await Column.create(body);
    return res.status(201).send(column);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.getColumns = async (req, res) => {
  try {
    const columns = await Column.findAll({
      where: {
        boardId: req.params.id,
      },
    });

    return res.status(200).send(columns);

  } catch (e) {
    return res.status(404).send({ message: e.message });
  }
};

exports.removeColumn = async (req, res) => {
  try {
    const column = await Column.findOne({
      where: {
        id: req.params.id,
      },
    });

    await column.destroy();
    res.status(200).send({ message: `the column ${column}  has been removed` });

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.updateColumn = async (req, res) => {
  const { params: { id }, body } = req;
  try {
    const [rows, [result]] = await Column.update(body, {
      where: {
        id: id,
      },
      returning: true,
    });

    if (rows) {
      return res.status(200).send({
        column: result,
      });
    }

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};