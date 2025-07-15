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

module.exports = {
    getAllUsers,
    getUserById,
}