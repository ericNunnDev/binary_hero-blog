const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('Sanity Check');
});

module.exports = server;