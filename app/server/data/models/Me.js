const mongo = require('mongoose');
const Schema = mongo.Schema;

const MeSchema = new Schema({
    lastname: String,
    firstname: String,
    email: String,
    phone: String,
    image: String,
    description: String,
    papercv: String
})

const Me = mongo.model('me', MeSchema);
module.exports = Me;