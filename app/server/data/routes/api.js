const express = require('express');
const router = express.Router();
const Page = require('../models/Page')
const Me = require('../models/Me')

// router.use('/admin/', express.static(__dirname + './public'));

router.get(`/page`, (req, res) => {
    Page.find(req.body).sort([
        ['order', 1]
    ]).then((page) => {
        res.send(page);
    })
})

router.get(`/me`, (req, res) => {
    // controller
    Me.find(req.body).then((me) => {
        res.send({
            lname: me.lastname,
            fname: me.firstname,
            mail: me.email,
            phone: me.phone,
            img: me.image,
            desc: me.description,
            cv: me.papercv
        });
    })
})
module.exports = router;