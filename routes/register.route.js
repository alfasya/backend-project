const { Router } = require('express');

const registerRouter = Router();

registerRouter.get('/register', registerController);

module.exports = registerRouter;