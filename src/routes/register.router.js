const express = require('express');

const {
    httpRegisterUser
}  = require('../controllers/register.controller');

const registerRouter = express.Router();

registerRouter.post('/',httpRegisterUser);

module.exports = registerRouter;

