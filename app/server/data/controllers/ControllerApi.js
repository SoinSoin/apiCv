const Page = require('../models/Page')
const Me = require('../models/Me')
module.exports = {
    getMeApi(req, res, next) {
        Me.find({}, {
            _id: 0,
            __v: 0
        }).then((me) => {
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
            image: '?' 
        }).then((page) => {
            res.send(page);
        }).catch(next)
    }
}