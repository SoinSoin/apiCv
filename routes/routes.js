const express = require('express');
const router = express.Router();
const Page = require('../models/Page')

router.post('/new_page', (req, res, next) => {
    console.log(req.body);
    Page.create(req.body).then((page) => {
        res.send(page);
    }).catch(next);
})

router.get('/page', (req, res) => {
    Page.find(req.body).then((page) => {
        res.send(page);
    })
})

router.get('/page/:id', (req, res) => {
    Page.find({_id: req.params.id}).then( (page)=>{
        res.send(page);
    })
})



router.put('/modify_page/:id', (req, res) => {
})

router.delete('/delete_page/:id', (req, res) => {
    console.log(req.params.id);
    Page.findOneAndRemove({_id: req.params.id}).then((page)=>{
        res.send('bien supprimé')
        // return res.redirect("/shop/coffee");
    })
})

module.exports = router;