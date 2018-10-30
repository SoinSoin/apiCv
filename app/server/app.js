const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
require('./config/db');

app.use('/', require('./data/routes/index'));
app.use(cors());
app.use(parser.json());
app.use('/public',express.static(__dirname +'public'));

module.exports = app;