var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var info = new mongoose.Schema({
    account: String,
    password: String,
    info: {
        name: String,
        age: Number
    }
});

module.exports = mongoose.model('Info', info);
