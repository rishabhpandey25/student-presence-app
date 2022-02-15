const express = require('express');

const {
    httpLoginUser
}  = require('../controllers/login.controller');

const loginRouter = express.Router();

loginRouter.get('/',httpLoginUser);

module.exports = loginRouter;
