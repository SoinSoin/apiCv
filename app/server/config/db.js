const mongo = require('mongoose');
mongo.connect('mongodb://mongo/mypage', {
    useNewUrlParser: true
});
mongo.Promise = global.Promise;
mongo.connection;
module.exports = mongo;