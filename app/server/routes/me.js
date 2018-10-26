const express = require('express');
const router = express.Router();
const Me = require('../models/Me')


// router.use('/admin/', express.static(__dirname + './public'));

router.get(`/`, (req, res) => {
    Me.find(req.body).then((me) => {
        res.send(me);
    })
})

router.get(`/:id`, (req, res) => {
    Me.find({
        _id: req.params.id
    }).then((me) => {
        res.send(me);
    })
})

router.post('/new', (req, res, next) => {
    // req.query.content = JSON.parse(req.query.content)
    Me.create(req.query).then((me) => {
        res.send(req.query);
    }).catch(next);
})

module.exports = router;