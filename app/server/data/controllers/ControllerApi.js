const Page = require('../models/Page')
const Me = require('../models/Me')
const fs = require('fs')
module.exports = {
    getMeApi(req, res, next) {
        Me.find({}, {
            _id: 0,
            __v: 0
        }).then((me) => {
            me.map((ele) => {
                Object.keys(ele._doc).map((targetUrl) => {
                    if (fs.existsSync(`./${ele[targetUrl]}`))
                        ele[targetUrl] = `${req.protocol}://${req.headers.host}/${ele[targetUrl]}`;
                })
            })
            res.send(me);
        }).catch(next)
    },
    getPageApi(req, res, next) {
        Page.page.find({}, {
            _id: 0,
            __v: 0
        }).sort({
            order: 1
        }).populate('contents', {
            _id: 0,
            __v: 0,
        }).then((page) => {
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
        }).catch(next)
    }
}