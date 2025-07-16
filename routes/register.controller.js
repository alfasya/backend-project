const bcrypt = require('bcrypt');

const pool = require('../models/users.model');

async function registerController(req, res) {
    try {
        const { username, password } = req.body;

        const encrypted = await bcrypt.hash(password, 10);

        await pool.query('BEGIN');

        await pool.query(
            `INSERT INTO accounts (username) VALUES ($1)`,
            [username]
        );

        const ret_id = await pool.query(
            `SELECT id FROM accounts WHERE username = $1`,
            [username]
        );

        const account_id = ret_id.rows[0].id;

        await pool.query(
            `INSERT INTO encrypted_password (encrypted_password, account_id) VALUES ($1, $2)`,
            [encrypted, account_id]
        );

        await pool.query('COMMIT');

        res.status(201).json({
            message : 'New account created successfully.',
        });

    } catch(err) {
        await pool.query('ROLLBACK');
        console.error(`Registration`, err);
        res.status(500).json({
            error : 'Internal server error.',   
        });
    }
}

module.exports = registerController;