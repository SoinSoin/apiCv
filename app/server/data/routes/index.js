const express = require('express');
const app = express(); 
app.use('/me', require('./me'));
app.use('/page', require('./page'));
app.use('/api', require('./api'));

module.exports = app;
