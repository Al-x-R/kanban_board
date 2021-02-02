const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config/app');

const generateToken = (user) => {
  delete user.password;

  const token = jwt.sign(user, config.tokenSecret, { expiresIn: config.tokenExpiresIn });

  return { ...{ user }, ...{ token } };
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      const userWithToken = generateToken(user.get({ raw: true }));

      return res.status(201).send(userWithToken);
    }

    return res.status(403).send({ message: 'Incorrect password or email' });

  } catch (e) {
    return res.status(500).json({ message: e.message });
  }

};

exports.register = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    const userWithToken = generateToken(user.get({ raw: true }));

    return res.status(201).send(userWithToken);

  } catch (e) {
    return res.status(409).json({ message: 'User with this mail already exists' });
  }
};