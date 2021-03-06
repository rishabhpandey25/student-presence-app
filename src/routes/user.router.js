const express = require('express');

const{
    httpGetUserInfo,
    httpEditUserInfo
} =  require('../controllers/user.controller');

const userRouter = express.Router();
userRouter.get('/',httpGetUserInfo);
userRouter.patch('/edit',httpEditUserInfo);
module.exports = userRouter;