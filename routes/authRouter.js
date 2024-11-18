const express = require('express');
const {login,register,logout} = require('../controllers/authController');

const authRouter = express.Router();

authRouter.post('/signup', register);

authRouter.post('/signin', login);

authRouter.post('/logout', logout);

module.exports = authRouter;