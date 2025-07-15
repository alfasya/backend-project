const { createServer } = require('http');
require('dotenv').config();

const pool = require('./models/users.model');

const app = require('./app');

const PORT = process.env.PORT;

const server = createServer(app);

async function connectServer() {
    await pool.connect();
    
    server.listen(PORT, () => {
        console.log(`Server is listening at port ${PORT}...`);
    });    
}

connectServer();