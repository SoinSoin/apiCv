const Page = require('../../../models/Page');
const fs = require('fs');

module.exports = {
    createContent(req) {
        var idContent = {}
        Page.contentPage.create(req.body.contents).then((contentPage) => {
            idContent['$push'] = {
                contents: contentPage._id
            }
            Page.page.findOneAndUpdate({
                _id: req.params._idPage
            }, idContent).then((page) => {
                res.send({
                    msg: `${contentPage.titles} a bien été ajouté à ${page.title}`
                });
            }).catch((next) => {
                res.send({
                    msg: `Une erreur est survenue lors de l'ajout de ${contentPage.titles} ou l'image n'est pas au format: jpg | jpeg | svg | png. Veuillez réessayer dans un instant.`
                });
            })
        })
    },
    updateContent(req) {
        console.log('update content')
    },
    deleteContent(req) {
        var idContent = {}
        Page.contentPage.findOneAndRemove({
            _id: req.query.q
        }).then((contentPage) => {
            idContent['$pull'] = {
                contents: contentPage._id
            }
            if (fs.existsSync(`./${contentPage.image}`))
                fs.unlinkSync(`./${contentPage.image}`);
            Page.page.findOneAndUpdate({
                _id: req.params._idPage
            }, idContent).then((page) => {
                res.send({
                    msg: `${contentPage.titles} a bien été supprimé`
                });
            }).catch((next) => {
                res.send({
                    msg: `Une erreur est survenue lors de la suppression de ${contentPage.titles}. Veuillez réessayer dans un instant.`
                });
            })
        })
    }
}