const jwt = require('jsonwebtoken');
require('dotenv').config();

async function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({
            message : 'Access denied.',
        });
    }

    try {
        const verified = jwt.verify(token.split(' ')[1], process.env.SECRET_KEY);
    
        req.users = verified;
        next();
    } catch(err) {
        res.status(401).json({
            message : 'Invalid token.',
        });
    }
}

module.exports = verifyToken;