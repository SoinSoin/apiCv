const mongo = require('mongoose');
const Schema = mongo.Schema;
const ContentPageSchema = require('./childs/Page/ContentPageSchema');

const PageSchema = new Schema({
    order: Number,
    title: String,
    types: {
        type: String,
        enum: ['single', 'items'],
        
    },
    contents: [{
        type: Schema.Types.ObjectId,
        ref: 'contentpage'
    }]
})

const ContentPage = mongo.model('contentpage', ContentPageSchema);
const Page = mongo.model('page', PageSchema);
module.exports = {
    page: Page,
    contentPage: ContentPage
};