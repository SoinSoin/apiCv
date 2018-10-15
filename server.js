const express = require('express');
const http = require('http');
const app = express();
const parser = require('body-parser');
const mongo = require('mongoose');
const port = 4000;

app.use(parser.json());
app.use('/api', require('./routes/routes'));

try {
    let startServer = http.createServer(app).listen(port);
    console.log(`service at :  http://127.0.0.1:${port}`)
} catch (error) {
    console.error(error);
}