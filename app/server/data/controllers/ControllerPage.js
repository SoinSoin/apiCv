const Page = require('../models/Page');
const fs = require('fs');

module.exports = {
    getAllPage(req, res, next) {
        Page.find(req.body).then((page) => {
            res.send(page);
        }).catch(next);
    },

    getFindPage(req, res, next) {
        Page.find({
            _id: req.params.id
        }).then((page) => {
            res.send(page);
        }).catch(next);
    },

    createPage(req, res, next) {
        console.log(req.body)
        var friend = {
            firstName: 'Harry',
            lastName: 'Potter'
        };
        Page.create({
            order: req.body.order,
            title: req.body.title,
        }, {
            $push: {
                "contents": friend
            }
        }, ).then((page) => {
            res.send(page);
        }).catch(next);
    },

    updatePage(req, res, next) {
        Page.findOneAndUpdate(req.body).then((page) => {
            res.send(page);
        }).catch(next);
    },

    deletePage(req, res, next) {
        Page.findOneAndDelete({
            _id: req.params.id
        }).then((page) => {
            res.send(page);
        }).catch(next)
    }
}

// var j = 0;
// var arrLength = []
// var substituteContent = req.body.content;
// var contents = {}
// req.body.content = [];
// // j'ajoute a mon futur tri les images
// for (var attr in req.files) {
//     substituteContent[attr] = [];
//     req.files[attr].map((linkImage) => {
//         substituteContent[attr].push(linkImage.path)
//     })
// }
// var arrAttr = Object.keys(substituteContent)
// // je passe une premier fois dans mes aattr de mon objet pour choisir la plus grande valeur 
// arrAttr.map((element, i) => {
//     if (typeof substituteContent[element] == "object") {
//         arrLength.push(parseInt(substituteContent[element].length))
//         if (i + 1 == arrAttr.length) {
//             var highVal = arrLength[0]
//             if (Math.max(arrLength))
//                 highVal = Math.max(arrLength)
//             while (j < highVal) {
//                 arrAttr.map((arg) => {
//                     if (typeof substituteContent[arg] == "object") {
//                         contents[arg] = substituteContent[arg][j]
//                     }
//                 })
//                 req.body.content.push(contents)
//                 contents = {};
//                 j++
//             }
//         }
//     }
// })