const pool = require('../models/users.model');

async function getAllUsers(req, res) {
    try {
        const result = await pool.query(
            `SELECT * FROM users`
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message : 'User not found.'
            });
        }

        res.status(200).json({
            message : 'Retrieving all users.',
            data : result.rows,
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
        const result = await pool.query(
            `SELECT * FROM users WHERE id = $1`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message : 'User not found.',
            });
        }

        res.status(200).json({
            message : `Retrieving user with id: ${id}`,
            data : result.rows[0],
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
        const result = await pool.query(
            `INSERT INTO users (username) VALUES ($1) RETURNING *`,
            [username]
        );

        res.status(201).json({
            message : `User added successfully.`,
            data : result.rows[0],
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
        const result = await pool.query(
            `UPDATE users SET username = $1 WHERE id = $2 RETURNING *`,
            [username, id]
        );

        if (result.rows.length === 0) {
            res.status(404).json({
                message : 'User not found.'
            });
        }

        res.status(200).json({
            message : `User with id ${id} updated succesfully.`,
            data : result.rows[0],
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