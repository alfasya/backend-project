const { Router } = require('express');

const registerController = require('./register.controller');

const registerRouter = Router();

registerRouter.post('/', registerController);

module.exports = registerRouter;