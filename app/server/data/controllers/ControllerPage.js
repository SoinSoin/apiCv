const Page = require('../models/Page');
const fs = require('fs');

module.exports = {
    getAllPage(req, res, next) {
        Page.page.find(req.body)
            .populate('contents')
            .then((page) => {
                res.send(page);
                // console.log(page);
            }).catch(next);
    },

    getFindPage(req, res, next) {
        Page.page.find({
                _id: req.params.id
            }).populate('contents')
            .then((page) => {
                res.send(page);
            }).catch(next);
    },

    createPage(req, res, next) {
        console.log(req.body);
        Page.contentPage.create(req.body.contents).then((test) => {
            req.body.contents = [test._id]
            Page.page.create(req.body).then((page) => {
                res.send(page);
            }).catch(next);
        })
    },
    updatePageAdd(req, res, next) {
        console.log(req.body)
        try {
            req.body.contents.image= req.file.path;
        } catch (error) {}
        Page.contentPage.create(req.body.contents).then((test) => {
            delete req.body.contents;
            req.body['$push'] = {
                contents: test._id
            }
            Page.page.findOneAndUpdate({
                _id: req.params._id
            }, req.body).then((page) => {
                res.send(page);
            }).catch(next);
        })
    },

    // deletePage(req, res, next) {
    //     Page.page.findOneAndDelete({
    //         _id: req.params.id
    //     }).then((page) => {
    //         res.send(page);
    //     }).catch(next)

}