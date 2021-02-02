const authRouter = require('express').Router();
const {login, register} = require('../controllers/authController')

authRouter.post('/login', login);

authRouter.post('/register', register)

module.exports = authRouter;