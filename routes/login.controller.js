const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const pool = require('../models/users.model');

async function loginController(req, res) {
    try {
        const { username, password } = req.body;

        const retr_username = await pool.query(
            `SELECT * FROM accounts WHERE username = $1`,
            [username]
        );

        if (retr_username.rows.length === 0) {
            return res.status(404).json({
                message :'User not found.',
            });
        }

        const userId = retr_username.rows[0].id;

        const retr_password = await pool.query(
            `SELECT * FROM encrypted_password WHERE account_id = $1`,
            [userId]
        );

        const match = await bcrypt.compare(password, retr_password.rows[0].encrypted_password);

        if (!match) {
            return res.status(400).json({
                message : 'Invalid password.',
            });
        }

        const token = jwt.sign({
            data : username,
        }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({
            message : `Welcome, ${username}.`,
            token : token,
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            error : 'Internal server error.',
        });
    }
}

module.exports = loginController;