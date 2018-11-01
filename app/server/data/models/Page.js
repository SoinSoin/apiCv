const mongo = require('mongoose');
const Schema = mongo.Schema;

const PageSchema = new Schema({
    order: Number,
    title: String,
    contents: {
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