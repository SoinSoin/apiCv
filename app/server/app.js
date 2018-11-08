const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const path = require('path')
require('./config/db');

app.use('/', require('./data/routes/index'));
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }))
app.use('/public/uploads', express.static(path.join(__dirname , 'public/uploads')));
module.exports = app;

