const Page = require('../models/Page');
const fs = require('fs');

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
                                    if (fs.existsSync(`./${ele[targetUrl][0][targetUrlbis]}`))
                                        ele[targetUrl][0][targetUrlbis] = `${req.protocol}://${req.headers.host}/${ele[targetUrl][0][targetUrlbis]}`;
                                })
                            } catch (error) {}
                        }
                    })
                })
                res.send(page);
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
                                Object.keys(ele[targetUrl][0]._doc).map((targetUrlbis) => {
                                    if (fs.existsSync(`./${ele[targetUrl][0][targetUrlbis]}`))
                                        ele[targetUrl][0][targetUrlbis] = `${req.protocol}://${req.headers.host}/${ele[targetUrl][0][targetUrlbis]}`;
                                })
                            } catch (error) {}
                        }
                    })
                })
                res.send(page);
            }).catch(next);
    },

    createPage(req, res, next) {
        try {
            req.body.contents.image = req.file.path;
        } catch (error) {}
        Page.contentPage.create(req.body.contents).then((test) => {
            req.body.contents = [test._id]
            Page.page.create(req.body).then((page) => {
                res.send(page);
            }).catch(next);
        })
    },
    updatePageAdd(req, res, next) {
        try {
            req.body.contents.image = req.file.path;
        } catch (error) {}
        Page.contentPage.create(req.body.contents).then((contentPage) => {
            delete req.body.contents;
            req.body['$push'] = {
                contents: contentPage._id
            }
            Page.page.findOneAndUpdate({
                _id: req.params._id
            }, req.body).then((page) => {
                res.send(page);
            }).catch(next);
        })
    },
    updatePageRemove(req, res, next) {
        Page.contentPage.findOneAndRemove({
            _id: req.params._idContent
        }).then((contentPage) => {
            if (fs.existsSync(`./${contentPage.image}`))
                fs.unlinkSync(`./${contentPage.image}`);
            Page.page.findOneAndUpdate({
                _id: req.params._idPage
            }, {
                $pull: {
                    contents: contentPage._id
                }
            }).then((page) => {
                res.send(page);
            }).catch(next);
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
            res.send(page);
        }).catch(next)

    }
}