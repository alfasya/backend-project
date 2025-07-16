const express = require('express');
const cors = require('cors');

const usersRouter = require('./routes/users.route');
const registerRouter = require('./routes/register.route');
const loginRouter = require('./routes/login.route');
const verifyToken = require('./middlewares/auth.middleware');

const app = express();

app.use(cors({
    origin : 'http://localhost:3000',
}));
app.use(express.json());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/feeds', verifyToken, (req, res) => {
    res.send(`Welcome. ${req.users.data}.`)
});

module.exports = app;