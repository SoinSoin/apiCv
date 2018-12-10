const Me = require('../models/Me');
const fs = require('fs');
module.exports = {
    getAllMe(req, res, next) {
        Me.find({}, {
            __v: 0
        }).then((me) => {
            me.map((ele) => {
                Object.keys(ele._doc).map((targetUrl) => {
                    if (fs.existsSync(`./${ele[targetUrl]}`))
                        ele[targetUrl] = `${req.protocol}://${req.headers.host}/${ele[targetUrl]}`;
                })
            })
            res.send({
                typeof: Me.modelName,
                val: me
            });
        }).catch((next) => {
            res.send({
                msg: `Nous rencontrons des difficultés. Veuillez réessayer dans un instant.`
            });
        })
    },
    getFindMe(req, res, next) {
        Me.find({
            _id: req.params.id
        }, {
            __v: 0
        }).then((me) => {
            me.map((ele) => {
                Object.keys(ele._doc).map((targetUrl) => {
                    if (fs.existsSync(`./${ele[targetUrl]}`))
                        ele[targetUrl] = `${req.protocol}://${req.headers.host}/${ele[targetUrl]}`;
                })
            })
            res.send({
                typeof: Me.modelName,
                val: me
            });
        }).catch((next) => {
            res.send({
                msg: `Nous rencontrons des difficultés. Veuillez réessayer dans un instant.`
            });
        })
    },

    createMe(req, res, next) {
        try {
            for (var obj in req.files) {
                req.body[obj] = req.files[obj][0].path
            }
        } catch (error) {}
        Me.create(req.body).then((me) => {
            res.send({
                msg: `${me.lastname}  ${me.firstname} a bien été ajouté`,
                lastname: me.lastname,
                firstname: me.firstname,
                _id: me._id
            });
        }).catch((next) => {
            console.log(me)
            res.send({
                msg: `Une erreur est survenue lors de l'ajout de ${me.lastname}  ${me.firstname} ou les fichiers nes sont pas au format: jpg | jpeg | svg | png | pdf. Veuillez réessayer dans un instant.`,
            });
        })
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
        }).catch((next) => {
            res.send({
                msg: `Une erreur est survenue lors de la modification de ${me.lastname}  ${me.firstname} ou les fichiers nes sont pas au format: jpg | jpeg | svg | png | pdf. Veuillez réessayer dans un instant.`
            });
        })
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
        }).catch((next) => {
            res.send({
                msg: `Une erreur est survenue lors de la suppression de ${me.lastname}  ${me.firstname}. Veuillez réessayer dans un instant.`
            });
        })
    }
}