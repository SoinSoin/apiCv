const express = require('express');
const router = express.Router();
const Page = require('../models/Page')
const Me = require('../models/Me')

// router.use('/admin/', express.static(__dirname + './public'));

router.get(`/page`, (req, res) => {
    Page.find(req.body).sort([['order', 1]]).then((page) => {
        res.send(page);
    })
})  
router.get(`/me`,(req,res)=>{
    Me.find(req.body).then((me) => {
        res.send(me);
    })
})
module.exports = router;