async function getAllUsers(req, res) {
    res.status(200).json({
        message : 'Retrieving all users.',
    });
}

module.exports = {
    getAllUsers,
}