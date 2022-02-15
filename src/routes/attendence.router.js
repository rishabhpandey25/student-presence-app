const express = require('express');

const {
    httpGetAttendence
}  = require('../controllers/attendence.controller');

const attendenceRouter = express.Router();

attendenceRouter.get('/',httpGetAttendence);

module.exports = attendenceRouter;

