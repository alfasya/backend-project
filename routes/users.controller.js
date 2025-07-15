async function getAllUsers(req, res) {
    res.status(200).json({
        message : 'Retrieving all users.',
    });
}

async function getUserById(req, res) {
    const { id } = req.params;

    res.status(200).json({
        message : `Retrieving user with id: ${id}`,
    });
}

async function addUser(req, res) {
    const { username } = req.body;

    res.status(201).json({
        message : `User added successfully.`,
    });
}

async function updateUser(req, res) {
    const { id } = req.params;
    const { username } = req.body;

    res.status(200).json({
        message : `User with id ${id} updated succesfully.`,
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
}