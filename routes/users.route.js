const { Router } = require('express');

const { getAllUsers } = require('./users.controller');

const usersRouter = Router();

usersRouter.get('/', getAllUsers);
// usersRouter.get('/:id', getUserById);
// usersRouter.post('/', addUser);
// usersRouter.put('/:id', updateUser);
// usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;