const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);
usersRouter.post('/', addUser);
usersRouter.put('/:id', updateUser);
usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;