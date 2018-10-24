const express = require('express');
const router = express.Router();
const Page = require('../models/Page')

// router.use('/admin/', express.static(__dirname + './public'));

// --- start page ---

// all result
router.get(`/page`, (req, res) => {
    Page.find(req.body).then((page) => {
        res.send(page);
    })
})

// result by id result
router.get('/admin/page/:id', (req, res) => {
    Page.find({
        _id: req.params.id
    }).then((page) => {
        res.send(page);
    })
})

// create a page
router.post('/new_page/', (req, res, next) => {
    req.query.content = JSON.parse(req.query.content)
    Page.create(req.query).then((page) => {
        res.send(req.query);
    }).catch(next);
})

// change page
router.put('admin/change_page/:id', (req, res) => {})

// delete a page
router.delete('/delete_page/:id', (req, res) => {
    Page.remove({
        _id: req.params.id
    }).then((page) => {
        res.send('bien supprimé')
        // return res.redirect("/shop/coffee");
    })
})

// --- end page ---
module.exports = router;