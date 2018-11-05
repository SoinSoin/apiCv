const mongo = require('mongoose');
const Schema = mongo.Schema;

const ContentPageSchema = new Schema({
    types: {
        type: String,
        enum: ['single', 'item']
    },
    titles: String,
    text: String,
    image: String
})


module.exports = ContentPageSchema;