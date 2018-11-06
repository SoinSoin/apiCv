const mongo = require('mongoose');
const Schema = mongo.Schema;

const ContentPageSchema = new Schema({
    titles: String,
    text: String,
    image: String
})


module.exports = ContentPageSchema;