const express = require('express');
const router = express.Router();
const Page = require('../models/Page')

// router.use('/admin/', express.static(__dirname + './public'));

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
    // req.query.order = parseInt(req.query.order)
    console.log(req.query.content );
    req.query.content = JSON.parse(req.query.content)

    Page.create({
        order:req.query.order,
        title: req.query.order,
        content: req.query.content
    }).then((page) => {
        res.send(req.query);
    }).catch(next);
})

// change page
router.put('admin/modify_page/:id', (req, res) => {})

// delete a page
router.delete('/delete_page/:id', (req, res) => {
    Page.findOneAndRemove({
        _id: req.params.id
    }).then((page) => {
        res.send('bien supprimé')
        // return res.redirect("/shop/coffee");
    })
})

module.exports = router;