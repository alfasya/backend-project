const express = require('express');
const cors = require('cors');

const usersRouter = require('./routes/users.route');
const registerRouter = require('./routes/register.route');
const loginRouter = require('./routes/login.route');

const app = express();

app.use(cors({
    origin : 'http://localhost:3000',
}));
app.use(express.json());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);

module.exports = app;