async function getAllUsers(req, res) {
    try {
        res.status(200).json({
            message : 'Retrieving all users.',
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            error : 'Internal server error.',
        });
    }
}

async function getUserById(req, res) {
    const { id } = req.params;
    try {
        res.status(200).json({
            message : `Retrieving user with id: ${id}`,
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            error : 'Internal server error.',
        });
    }
}

async function addUser(req, res) {
    const { username } = req.body;
    try {
        res.status(201).json({
            message : `User added successfully.`,
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            error : 'Internal server error.',
        });
    }
}

async function updateUser(req, res) {
    const { id } = req.params;
    const { username } = req.body;

    try {
        res.status(200).json({
            message : `User with id ${id} updated succesfully.`,
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            error : 'Internal server error.',
        });
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;

    try {
        res.status(200).json({
            message : `User with id ${id} deleted succesfully.`,
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            error : 'Internal server error.',
        });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
}