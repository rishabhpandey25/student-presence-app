const express = require('express');

const {
    httpLoginUser
}  = require('../controllers/login.controller');

const loginRouter = express.Router();

loginRouter.post('/',httpLoginUser);

module.exports = loginRouter;
