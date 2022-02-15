const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./routes/user.router');
const attendenceRouter = require('./routes/attendence.router');
const registerRouter = require('./routes/register.router');
const loginRouter = require('./routes/login.router');

const app = express();
app.use(cors({
    origin: '*'
}));

app.use(morgan('tiny'));
app.use(express.json());
app.use('/user',userRouter);
app.use('/attendence',attendenceRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter);
module.exports = app;