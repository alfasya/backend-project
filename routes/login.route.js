const { Router } = require('express');

const loginRouter = Router();

loginRouter.post('/', loginController);

module.exports = loginRouter;