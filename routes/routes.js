const express = require('express');
const router = express.Router();

router.get('/page', (req, res) => {
    res.send({
        type: 'GET'
    })
})

router.post('/page', (req, res) => {
    res.send({
        type: 'POST'
    })
})

router.put('/page/:id', (req, res) => {
    res.send({
        type: 'PUT'
    })
})

router.delete('/page/:id', (req, res) => {
    res.send({
        type: 'DELETE'
    })
})

module.exports = router;