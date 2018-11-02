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
        // #1 je récupére les attributs de de mon objet body;
        const nameKey = {}
        var bodyReq = req.body;
        const reqBodyKey = Object.keys(bodyReq)
        // #2 je parcours mes attributs et je teste pour sacoir si l'un d'eux  est un objet
        reqBodyKey.map((attrbody) => {
            var valObjAttr = bodyReq[attrbody]
            if (typeof valObjAttr === "object") {
                var attrChildObj = Object.keys(bodyReq[attrbody])
                nameKey.content = attrbody;
                // #3 je recupere les attributs de l'objet dans mon objet
                attrChildObj.map((attrObjinObj, j) => {
                    if (typeof valObjAttr[attrObjinObj] === "object") {
                        if (j + 1 == attrChildObj.length) {
                            req.body[attrbody] = [];
                            console.log(bodyReq)
                            // pause ici voir algo plus bas
                        }
                    }
                })
            }
        })
        res.send({
            test: "OK"
        });
        // créer mes elements les mettres en base 
        // Page.contentPage.create(req.body[nameKey.content]).then((test) => {
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

// function setSortBody(arg) {
//     var j = 0;
//     var arrLength = []
//     var substituteContent = arg.body.contents;
//     var contents = {}
//     arg.body.contents = [];
// j'ajoute a mon futur tri les images
// for (var attr in arg.files) {
//     substituteContent[attr] = [];
//     req.files[attr].map((linkImage) => {
//         substituteContent[attr].push(linkImage.path)
//     })
// }
//     var arrAttr = Object.keys(substituteContent)
//     arrAttr.substituteContent((element, i) => {
//         if (typeof substituteContent[element] == "object") {
//             arrLength.push(parseInt(substituteContent[element].length))
//             if (i + 1 == arrAttr.length) {
//                 var highVal = arrLength[0]
//                 if (Math.max(arrLength))
//                     highVal = Math.max(arrLength)
//                 while (j < highVal) {
//                     arrAttr.map((arg) => {
//                         if (typeof substituteContent[arg] == "object") {
//                             contents[arg] = substituteContent[arg][j]
//                         }
//                     })
//                     req.body.contents.push(contents)
//                     contents = {};
//                     j++
//                 }
//             }
//         }
//     })
// }