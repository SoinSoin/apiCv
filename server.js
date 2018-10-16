// declare my variables for 
const express = require('express');
const app = express();
const http = require('http');
const parser = require('body-parser');
const mongo = require('mongoose');
const port = 4000;

// use methode by express 
app.use(parser.json());
app.use('/api', require('./routes/routes'));

// link for sgbd with robo3t
mongo.connect('mongodb://127.0.0.1:27017/mypage', {
    useNewUrlParser: true
});
mongo.Promise = global.Promise;
// console.log(mongo.Promise)


try {
    let startServer = http.createServer(app).listen(port);
    console.warn(`http://127.0.0.1:${port}`)
} catch (error) {
    console.error(error);
}