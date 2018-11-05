const Page = require('../models/Page');
const fs = require('fs');

module.exports = {
    getAllPage(req, res, next) {
        Page.page.find(req.body)
            .populate('contents')
            .then((page) => {
                res.send(page);
                // console.log(page);
            })
    },

    getFindPage(req, res, next) {
        Page.page.find({
            _id: req.params.id
        }).then((page) => {
            res.send(page);
        }).catch(next);
    },

    createPage(req, res, next) {
        // # avoir des noms de variables qui ne change pas
        // try {
        //     for (var attr in arg.files) {
        //         substituteContent[attr] = [];
        //         req.files[attr].map((linkImage) => {
        //             substituteContent[attr].push(linkImage.path)
        //         })
        //     }
        // } catch (error) {}
        const params = {};
        const reqBodyKey = Object.keys(req.body)
        // #2 je parcours mes attributs et je teste pour sacoir si l'un d'eux  est un objet
        reqBodyKey.map((attrbody) => {
            var valObjAttr = req.body[attrbody]
            if (typeof valObjAttr === "object") {
                params.content = attrbody;
            } else {
                if (isNaN(valObjAttr)){
                    params.title = attrbody;
                }
                if (!isNaN(valObjAttr))
                    params.order = attrbody;
            }
        })
        console.log(Object.keys(Page.contentPage.schema.paths))
        console.log(Object.keys(Page.page.schema.paths))
        console.log(req.body);
        // #1 je push content page
        // #2 je récupére l'id et je le push dans page
        res.send({
            test: "OK"
        });
        // créer mes elements les mettres en base 
        // Page.contentPage.create(req.body[objKey.content]).then((test) => {
        //     res.send(test);
        // })
        // dans la promessse récupérer l'id et le mettre en donnée de page
        // Page.page.create(req.body.contents).then((cpage) => {
        //     Page.page.create().then((page) => {
        //         res.send(page);
        //     }).catch(next);

    },

    updatePage(req, res, next) {
        Page.page.findOneAndUpdate(req.body).then((page) => {
            res.send(page);
        }).catch(next);
    },

    deletePage(req, res, next) {
        Page.page.findOneAndDelete({
            _id: req.params.id
        }).then((page) => {
            res.send(page);
        }).catch(next)
    }
}