var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var qa = new Schema({
    _id: Number,
    question: String,
    answers: String
});

module.exports = mongoose.model('QA', qa);
