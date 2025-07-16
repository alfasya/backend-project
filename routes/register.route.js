const { Router } = require('express');

const registerRouter = Router();

registerRouter.get('/', registerController);

module.exports = registerRouter;