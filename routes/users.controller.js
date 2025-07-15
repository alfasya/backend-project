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

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
}