const { createServer } = require('http');
require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT;

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}...`);
});