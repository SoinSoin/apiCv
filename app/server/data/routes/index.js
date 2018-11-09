const express = require('express');
const app = express();
app.use('/me', require('./me'));
app.use('/page', require('./page'));
app.use('/api', require('./api'));
app.use('', (req, res, next) => {
    if (res.status(404))
        res.send('Sorry for 404 error (・・；)')
    // res.redirect('/error');
})

module.exports = app;