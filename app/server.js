// declare my variables for 
const express = require('express');
const app = express();
const http = require('http');
const parser = require('body-parser');
const mongo = require('mongoose');
const port = 3000;
// use methode by express 
app.use(parser.json());
app.use('/api/page', require('./routes/api'));
// app.use('/api', express.static(__dirname + '/public'));
// link for sgbd with robo3t
console.log('test')
    mongo.connect('mongodb://mongo/mypage', {
        useNewUrlParser: true
    });
    mongo.Promise = global.Promise;
try {
    let startServer = http.createServer(app).listen(port);
} catch (error) {
    console.error('server',error);
}