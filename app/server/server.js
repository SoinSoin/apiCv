// declare my variables for 
const express = require('express');
const app = express();
const http = require('http');
const parser = require('body-parser');
const mongo = require('mongoose');
const port = 3000; 
const cors = require('cors');
mongo.connect('mongodb://mongo/mypage', {
    useNewUrlParser: true
});
mongo.Promise = global.Promise;
mongo.connection
try {
    let startServer = http.createServer(app).listen(port);
} catch (error) {
    console.error('server',error);
}
app.use(express.static('public'));
app.use(cors())   ;
app.use(parser.json());
app.use('/api', require('./routes/api'));
// app.use('/admin',require('./routes/admin'));
app.use('/admin/me', require('./routes/me'));
// app.use('/admin/page', require('./routes/page'));