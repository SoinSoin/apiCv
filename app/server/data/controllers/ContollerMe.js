const Me = require('../models/Me');
const fs = require('fs');

module.exports = {
    getAllMe(req, res, next) {
        Me.find(req.body).then((me) => {
            res.send(me);
        }).catch(next);
    },

    getFindMe(req, res, next) {
        Me.find({
            _id: req.params.id
        }).then((me) => {
            res.send(me);
        }).catch(next);
    },

    createMe(req, res, next) {
        try {
            path = req.file.path
        } catch (error) {
            path = null;
        }
        Me.create({
            lastname: req.body.lname,
            firstname: req.body.fname,
            email: req.body.mail,
            image: path,
            phone: req.body.phone,
            description: req.body.desc
        }).then((me) => {
            res.send({
                msg: 'bien envoyé',
                val: me
            });
        }).catch(next);
    },

    updateMe(req, res, next) {
        try {
            path = req.file.path
        } catch (error) {
            path = req.body.path
        }
        Me.findOneAndUpdate({
            _id: req.params.id,
            lastname: req.body.lname,
            firstname: req.body.fname,
            email: req.body.mail,
            image: path,
            phone: req.body.phone,
            description: req.body.desc
        }).then((me) => {
            if (fs.existsSync(`./${me.image}`) && path == req.file.path)
                fs.unlinkSync(`./${me.image}`);
            res.send(me);
        }).catch(next);
    },
    
    deleteMe(req, res, next) {
        Me.findOneAndDelete({
            _id: req.params.id
        }).then((me) => {
            if (fs.existsSync(`./${me.image}`))
                fs.unlinkSync(`./${me.image}`);
            res.send(me);
        }).catch(next)
    }
}