const User = require('../models').User;
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(403).send({ message: 'Incorrect password' });
    }

    return res.status(200).send(user);
  } catch (e) {
    console.log(e);
  }
  return res.status(200).send(req.body);
};

exports.register = async (req, res) => {
  return res.send('REGISTER');
};