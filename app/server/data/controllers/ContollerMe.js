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
            for (var obj in req.files) {
                req.body[obj] = req.files[obj][0].path
            }
        } catch (error) {}
        Me.create(req.body).then((me) => {
            res.send({
                msg: `${me.lastname}  ${me.firstname} a bien été ajouté`
            });
        }).catch(next);
    },

    updateMe(req, res, next) {
        try {
            for (var obj in req.files) {
                req.body[obj] = req.files[obj][0].path
            }
        } catch (error) {}
        Me.findOneAndUpdate({
            _id: req.params.id
        }, req.body).then((me) => {
            try {
                for (var obj in req.files) {
                    if (fs.existsSync(`./${me[req.files[obj][0].fieldname]}`))
                        fs.unlinkSync(`./${me[req.files[obj][0].fieldname]}`);
                }
            } catch (error) {}
            res.send({
                msg: `${me.lastname}  ${me.firstname} a bien été modifié`
            });
        }).catch(next);
    },

    deleteMe(req, res, next) {
        Me.findOneAndDelete({
            _id: req.params.id
        }).then((me) => {
            for (var attr in me) {
                if (fs.existsSync(`./${me[attr]}`))
                    fs.unlinkSync(`./${me[attr]}`);
            }
            res.send({
                msg: `${me.lastname}  ${me.firstname} a bien été supprimé`
            });
        }).catch(next)
    }
}