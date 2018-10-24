const mongo = require('mongoose');
const Schema = mongo.Schema;

const AdminSchema = new Schema({
name: String,
pswd: String
})

const Admin = mongo.model('admin', Admin);
module.exports =Admin;