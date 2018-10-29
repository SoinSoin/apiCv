const express = require('express');
const app = express();
const parser = require('body-parser');
const db = require('./config/db');
const cors = require('cors');

app.use('/', require('./data/routes/index'));
app.use(cors());
app.use(parser.json());
app.use('/public',express.static(__dirname +'public'));

module.exports = app;