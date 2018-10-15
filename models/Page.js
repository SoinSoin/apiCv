const mongo = require('mongoose');
const Schema = mongo.Schema;

const PageSchema = new Schema({
    _id: ObjectId(),
    order: {
        type: Number
    },
    title: {
        type: String
    },
    content: {
        type: [{
            title: {
                type: String
            },
            text: {
                type: String
            },
            image: {
                type: String
            }
        }]
    }
})

const Page = mongo.model('page', PageSchema);
module.exports = Page;