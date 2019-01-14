const Page = require('../models/Page');
const fs = require('fs');
const Content = require('./childs/Page/ControllerContent')

module.exports = {
    getAllPage(req, res, next) {
        Page.page.find({}, {
                __v: 0,
            })
            .populate('contents', {
                __v: 0,
            })
            .sort({
                order: 1
            })
            .then((page) => {
                page.map((ele, i) => {
                    Object.keys(ele._doc).map((targetUrl) => {
                        if (fs.existsSync(`./${ele[targetUrl]}`))
                            ele[targetUrl] = `${req.protocol}://${req.headers.host}/${ele[targetUrl]}`;
                        if (typeof ele[targetUrl] === "object") {
                            try {
                                Object.keys(ele[targetUrl][0]._doc).map((targetUrlbis) => {
                                    ele[targetUrl].map(url => {
                                        if (fs.existsSync(`./${url[targetUrlbis]}`))
                                            url[targetUrlbis] = `${req.protocol}://${req.headers.host}/${url[targetUrlbis]}`;
                                    })
                                })
                            } catch (error) {}
                        }
                    })
                })
                res.send({
                    typeof: Page.page.modelName,
                    val: page
                });
            }).catch(next);
    },

    getFindPage(req, res, next) {
        Page.page.find({
                _id: req.params.id
            }, {
                __v: 0,
            }).populate('contents', {
                __v: 0,
            })
            .then((page) => {
                page.map((ele, i) => {
                    Object.keys(ele._doc).map((targetUrl) => {
                        if (fs.existsSync(`./${ele[targetUrl]}`))
                            ele[targetUrl] = `${req.protocol}://${req.headers.host}/${ele[targetUrl]}`;
                        if (typeof ele[targetUrl] === "object") {
                            try {
                                Object.keys(ele[targetUrl][0]._doc).map((targetUrlbis, j) => {
                                    ele[targetUrl].map(url => {
                                        if (fs.existsSync(`./${url[targetUrlbis]}`))
                                            url[targetUrlbis] = `${req.protocol}://${req.headers.host}/${url[targetUrlbis]}`;
                                    })
                                })
                            } catch (error) {}
                        }
                    })
                })
                res.send({
                    typeof: Page.page.modelName,
                    val: page
                });
            }).catch((next) => {
                res.send({
                    msg: `Nous rencontrons des difficultés. Veuillez réessayer dans un instant.`
                });
            })
    },

    createPage(req, res, next) {
        Page.page.create(req.body).then((page) => {
            res.send({
                msg: `${page.title} a bien été créé`
            });
        }).catch((next) => {
            res.send({
                msg: `Nous rencontrons des difficultés. Veuillez réessayer dans un instant.`
            });
        })
    },

    updatePage(req, res, next) {
        // faire une modificatioin glovbale en amont puis ensuite modifié au cas par  cas le contentenu dans les methodes du controllercontent
        try {
            req.body.contents.image = req.file.path;
        } catch (error) {}

        // 1 je traite les contenus dans les methodes ci dessous
        switch (req.params.methode) {
            case 'create':
                Content.createContent(req)
                break;
            case 'update':
                Content.updateContent(req)
                break;
            case 'delete':
                Content.deleteContent(req)
                break;
            default:
                break;
        }
        // 2 je supprime les contenus
        delete req.body.contents;
        // 3 les propriétés global de mon entité sont modifié ici quoi qu'il advienne
        Page.page.findOneAndUpdate({
            _id: req.params._idPage
        }, req.body).then((page) => {
            res.send({
                msg: `${page.title} a bien été modifié`
            });
        }).catch((next) => {
            res.send({
                msg: `Une erreur est survenue. Veuillez réessayer dans un instant.`
            });
        })
    },

    deletePage(req, res, next) {
        Page.page.findOneAndDelete({
            _id: req.params.id
        }).then((page) => {
            page.contents.map((element) => {
                Page.contentPage.findOneAndDelete({
                    _id: element
                }).then((contentPage) => {
                    if (fs.existsSync(`./${contentPage.image}`))
                        fs.unlinkSync(`./${contentPage.image}`);
                })
            })
            res.send({
                msg: `${page.title} a bien été supprimé`
            });
        }).catch((next) => {
            res.send({
                msg: `Une erreur est survenue lors de la suppression de ${page.title}. Veuillez réessayer dans un instant.`
            });
        })
    }
}