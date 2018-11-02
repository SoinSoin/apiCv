const mongo = require('mongoose');
const Schema = mongo.Schema;
const SchemaContentPage = require('./childs/Page/SchemaContentPage');

const PageSchema = new Schema({
    order: Number,
    title: String,
    contents: {
        type: Schema.Types.ObjectId,
        ref: 'contentpage'
    }
})

const ContentPage = mongo.model('contentpage', SchemaContentPage);
const Page = mongo.model('page', PageSchema);
module.exports = {
    page: Page,
    contentPage: ContentPage
};