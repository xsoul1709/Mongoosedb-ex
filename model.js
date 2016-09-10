const mongoose = require('mongoose');

var info = new Schema({
    userName: String,
    password: String
});

var qa = new Scheme({
    question: String,
    answer: []
});

var setting = new Schema({
    percentPassed: Number,
    numberOfQA: Number,
    duration: Number
});
