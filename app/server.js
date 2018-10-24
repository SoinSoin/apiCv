// declare my variables for 
const express = require('express');
const app = express();
const http = require('http');
const parser = require('body-parser');
const mongo = require('mongoose');
const port = 3000; 
app.use(parser.json());
// call my api route
app.use('api/', require('./routes/api'));
// app.use('/api', express.static(__dirname + '/public'));
// connect to mongo sgbd
mongo.connect('mongodb://mongo/mypage', {
    useNewUrlParser: true
});
mongo.Promise = global.Promise;
mongo.connection
// server start
try {
    let startServer = http.createServer(app).listen(port);
} catch (error) {
    console.error('server',error);
}