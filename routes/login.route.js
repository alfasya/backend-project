const { Router } = require('express');

const loginController = require('./login.controller');

const loginRouter = Router();

loginRouter.post('/', loginController);

module.exports = loginRouter;