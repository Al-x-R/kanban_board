const { Comment, BoardActivities, CardActivities, Card } = require('../models');

exports.createComment = async (req, res) => {
  const { params: { cardId, boardId }, body, user: { email } } = req;

  try {
    const comment = await Comment.create({ ...body });

    // const card = await Card.findOne({
    //   where: {
    //     cardId,
    //   },
    // });
    // console.log(card)
    //
    // await BoardActivities.create({
    //   boardId,
    //   user: email,
    //   action: `add comment to ${card.name}`,
    // });

    res.status(201).send(comment);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.getComments = async (req, res) => {
  const { params: { cardId } } = req;


  try {
    const comments = await Comment.findAll({
      where: {
        cardId,
      },
    });

    res.send(comments);

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.updateComment = async (req, res) => {
  const { params, body, user } = req;

  try {

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

exports.removeComment = async (req, res) => {
  const { params: { cardId, commentId }, user: { email } } = req;

  try {
    const comment = await Comment.findOne({
      where: {
        user: email,
        cardId,
        id: commentId,
      },
    });

    await comment.destroy();

    res.send({ message: `comment ${comment.comment} has been removed` });

  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};