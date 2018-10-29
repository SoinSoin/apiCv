const express = require('express');
const app = express(); 

app.use('/me', require('./me'));
app.use('/api', require('./api'));
module.exports = app;
